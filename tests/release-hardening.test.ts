// @vitest-environment node
import{beforeAll,describe,expect,it}from'vitest';
import{readFileSync,readdirSync}from'node:fs';
import{join}from'node:path';
import{build}from'vite';
import{hasH1,hasHttpLink}from'../src/core';

const root=process.cwd();
const read=(path:string)=>readFileSync(join(root,path),'utf8');
const oldRegistryLabel=['Verified','from registry'].join(' ');
const oldDemoNames=[['Grand','Sal'].join(' '),['ME','BIN'].join('')];

beforeAll(async()=>{await build({root,logLevel:'silent'})},30000);

describe('v1.0.1 evidence hardening',()=>{
 it('builds substantive static HTML for crawlers',()=>{
  const html=read('dist/index.html');
  expect(html).toContain('AKTRU Verified AI Identity Builder');
  expect(html).toContain('Selected files are processed locally in the browser');
  expect(html).toContain('this tool is not a certificate');
  expect(html).toContain('does not independently verify the document’s origin');
  expect(html).toContain('Interactive analysis, demonstrations and downloads require JavaScript');
  expect(html.length).toBeGreaterThan(5000);
 });
 it('publishes valid agent guidance files',()=>{
  for(const name of['llms.txt','llms-full.txt']){const text=read(`dist/${name}`);expect(hasH1(text)).toBe(true);expect(hasHttpLink(text)).toBe(true);expect(text).toContain('local-first')}
 });
 it('removes legacy evidence wording and named demos from public artifacts',()=>{
  const files=['dist/index.html','dist/llms.txt','dist/llms-full.txt',...readdirSync(join(root,'dist/assets')).map(name=>`dist/assets/${name}`)];
  const publicText=files.map(read).join('\n');
  expect(publicText).not.toContain(oldRegistryLabel);
  oldDemoNames.forEach(name=>expect(publicText).not.toContain(name));
  expect(publicText).toContain('Hospitality Demo PL');
  expect(publicText).toContain('https://furniture-de.example/');
 });
 it('keeps file processing local with no network-upload primitive in application source',()=>{
  const source=['src/App.tsx','src/core.ts','src/bundle.ts'].map(read).join('\n');
  expect(source).not.toMatch(/\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket/);
 });
});
