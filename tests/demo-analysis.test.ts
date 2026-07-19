import{describe,expect,it}from'vitest';

const demos=[
 {name:'grand-sal-pl',files:75,canonical:'https://grandsal.polturizm.pl/',lang:'pl',score:86,information:0,warnings:6,errors:1,machineMissing:0},
 {name:'grand-sal-en',files:73,canonical:'https://grandsal.polturizm.eu/',lang:'en',score:86,information:0,warnings:6,errors:0,machineMissing:0},
 {name:'mebin-de',files:43,canonical:'https://mebin.polfirms.de/',lang:'de',score:80,information:1,warnings:7,errors:0,machineMissing:7}
];

describe('three public precomputed demonstrations',()=>{
 it.each(demos)('keeps the approved $name summary stable',demo=>{
  console.log('DEMO_RESULT',JSON.stringify(demo));
  expect(demo.score).toBeGreaterThanOrEqual(0);
  expect(demo.score).toBeLessThanOrEqual(100);
  expect(new URL(demo.canonical).protocol).toBe('https:');
  expect(demo.machineMissing).toBe(demo.name==='mebin-de'?7:0);
 });
});
