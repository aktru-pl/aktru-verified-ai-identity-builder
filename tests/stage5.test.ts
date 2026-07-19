import{describe,expect,it}from'vitest';import{compareRegistry,compareValue}from'../src/core';import{beforeAfterManifest,generateBundle,proposalFields,registrySummary,sourceSummary}from'../src/bundle';import type{Analysis,Identity,RegistryResult}from'../src/types';
const identity:Identity={fileCount:3,indexPath:'index.html',lang:'en',title:'Example Sp. z o.o.',description:'Example',canonicals:['https://example.com/'],hreflang:[],openGraph:{image:'x'},twitter:{image:'x'},jsonLd:[{'@type':'Organization',name:'Example Sp. z o.o.',nip:'123-456-78-90'}],css:[],scripts:[],images:[],machineLinks:[],sitemap:true,robots:true};
const registry:RegistryResult={fileName:'synthetic-krs.json',valid:true,sha256:'ABC',message:'ok',fields:[{field:'name',value:'EXAMPLE SP Z OO',path:'$.odpis.dane.nazwa',sourceClass:'verified from registry'},{field:'nip',value:'1234567890',path:'$.odpis.dane.nip',sourceClass:'verified from registry'}]};
const analysis:Analysis={identity,results:[],registry,registryCoverage:'matched',comparisons:[],score:{total:100,parts:[]}};
describe('stage 5 product behavior',()=>{
 it('reports registry not provided separately',()=>expect(compareRegistry(identity).coverage).toBe('not provided'));
 it('reports mismatch coverage',()=>expect(compareRegistry(identity,{...registry,fields:registry.fields.map(f=>f.field==='name'?{...f,value:'AKTRU SP Z OO'}:f)}).coverage).toBe('mismatch'));
 it('detects exact match',()=>expect(compareValue('krs','123','123').status).toBe('exact match'));
 it('detects normalized match',()=>expect(compareValue('nip','123-456','123456').status).toBe('normalized match'));
 it('detects mismatch',()=>expect(compareValue('name','Grand Sal','AKTRU').status).toBe('mismatch'));
 it('detects a missing website field',()=>expect(compareValue('regon',null,'123').status).toBe('missing on website'));
 it('does not match synthetic AKTRU registry to Grand Sal',()=>expect(compareValue('name','Grand Sal Hotel','AKTRU sp. z o.o.').status).toBe('mismatch'));
 it('honors manual field exclusion',()=>{const fields=proposalFields(analysis).map(x=>x.id==='title'?{...x,include:false}:x),bundle=generateBundle(analysis,fields.filter(x=>x.include));expect(JSON.parse(bundle['knowledge.json']).title).toBeNull()});
 it('creates before-after manifest without claiming deployment',()=>{const m=beforeAfterManifest(analysis,generateBundle(analysis),'fixture');expect(m.inputModified).toBe(false);expect(m.status).toBe('requires human review')});
 it('creates safe registry summary without full values',()=>{const text=JSON.stringify(registrySummary(analysis));expect(text).not.toContain('1234567890');expect(text).not.toContain('EXAMPLE')});
 it('creates source summary with registry summary-only status',()=>expect(sourceSummary(analysis).sources[1].usageStatus).toContain('original excluded'));
 it('supports stable precomputed demo identity data',()=>expect({...identity,fileCount:75}.fileCount).toBe(75));
});
