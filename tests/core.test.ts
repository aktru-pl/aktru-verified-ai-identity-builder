import{describe,expect,it}from'vitest';import{analyzeRegistry,calculateScore,hasBom,hasH1,hasHttpLink,isExternalUrl,missingLocal,parseCanonical,parseJson}from'../src/core';import type{Identity}from'../src/types';
describe('technical rules',()=>{
 it('detects BOM',()=>expect(hasBom('\uFEFF{}')).toBe(true));
 it('parses canonical',()=>expect(parseCanonical('<link rel="canonical" href="https://example.com/">')).toEqual(['https://example.com/']));
 it('detects multiple canonicals',()=>expect(parseCanonical('<link rel="canonical" href="https://a.test/"><link href="https://b.test/" rel="canonical">')).toHaveLength(2));
 it('checks H1 in llms.txt',()=>{expect(hasH1('# Name')).toBe(true);expect(hasH1('## Name')).toBe(false)});
 it('checks HTTP link in llms.txt',()=>{expect(hasHttpLink('Source https://example.com/')).toBe(true);expect(hasHttpLink('no link')).toBe(false)});
 it('detects missing files',()=>expect(missingLocal('/img/missing.webp',new Set(['index.html','img/found.webp']))).toBe(true));
 it('classifies external and local URLs',()=>{expect(isExternalUrl('https://example.com/a')).toBe(true);expect(isExternalUrl('img/a.webp')).toBe(false)});
 it('parses valid JSON',()=>expect(parseJson('{"ok":true}').valid).toBe(true));
 it('rejects invalid JSON',()=>expect(parseJson('{"ok":}').valid).toBe(false));
 it('recognizes basic registry fields',async()=>{const text=JSON.stringify({odpis:{dane:{nazwa:'ACME',krs:'1234567890',nip:'123'}}}),bytes=new TextEncoder().encode(text),f={name:'small-krs.json',text:async()=>text,arrayBuffer:async()=>bytes.buffer}as File;const r=await analyzeRegistry(f);expect(r.valid).toBe(true);expect(r.fields.map(x=>x.field)).toEqual(expect.arrayContaining(['name','krs','nip']))});
 it('calculates technical score independently of registry',()=>{const i:Identity={fileCount:1,indexPath:'index.html',lang:'en',title:'A',description:'B',canonicals:['https://example.com/'],hreflang:[],openGraph:{image:'x'},twitter:{image:''},jsonLd:[{}],css:[],scripts:[],images:[],machineLinks:[],sitemap:true,robots:true};const s=calculateScore(i,[]);expect(s.total).toBe(100);expect(s.parts.reduce((n,p)=>n+p.max,0)).toBe(100)});
});
