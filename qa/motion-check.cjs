const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_EXECUTABLE?{executablePath:process.env.CHROME_EXECUTABLE}:{})});
 const results=[];
 for(const width of [1440,400]) {
  const context=await browser.newContext({viewport:{width,height:900}});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:3011',{waitUntil:'networkidle'});
  assert.equal(await page.locator('.hero-entrance').first().evaluate(el=>getComputedStyle(el).animationName),'hero-enter');
  const before=await page.evaluate(()=>({height:document.documentElement.scrollHeight,experience:document.querySelector('#experience').offsetTop,contact:document.querySelector('#contact').offsetTop}));
  const card=page.locator('[data-motion-reveal]').first();await card.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelector('[data-motion-reveal]').getAnimations().length>0);
  assert.equal(await card.evaluate(el=>Number(getComputedStyle(el).opacity)>=0.8),true);
  await card.getByRole('link',{name:'Case study'}).focus();
  await page.waitForFunction(()=>document.querySelector('[data-motion-reveal]').getAnimations().length===0);
  await card.getByRole('link',{name:'Case study'}).focus();
  assert.equal(await card.getByRole('link',{name:'Case study'}).evaluate(el=>getComputedStyle(el).outlineStyle),'solid');
  await card.hover(); await page.waitForTimeout(220);
  assert.notEqual(await card.evaluate(el=>getComputedStyle(el).transform),'none');
  await page.mouse.move(0,0);await page.waitForTimeout(220);
  const after=await page.evaluate(()=>({height:document.documentElement.scrollHeight,experience:document.querySelector('#experience').offsetTop,contact:document.querySelector('#contact').offsetTop}));assert.deepEqual(after,before);
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.reload({waitUntil:'networkidle'});
  const next=page.locator('[data-motion-reveal]').nth(1);await next.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelectorAll('[data-motion-reveal]')[1].getAnimations().length>0);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.waitForFunction(()=>document.querySelectorAll('[data-motion-reveal]')[1].getAnimations().length===0);
  assert.equal(await page.locator('.hero-entrance').first().evaluate(el=>getComputedStyle(el).animationName),'none');
  assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  await page.locator('[data-motion-reveal]').nth(1).scrollIntoViewIfNeeded();
  assert.equal(await page.locator('[data-motion-reveal]').nth(1).evaluate(el=>el.getAnimations().length),0);
  await card.hover();assert.equal(await card.evaluate(el=>getComputedStyle(el).transform),'none');
  assert.deepEqual(errors,[]);results.push({width,layout:before,errors,reducedMotion:'passed',hoverFocus:'passed'});await context.close();
 }
 for(const mode of ['no-js','no-observer','observer-throws']) {
  const context=await browser.newContext({javaScriptEnabled:mode!=='no-js'});
  if(mode==='no-observer')await context.addInitScript(()=>{delete window.IntersectionObserver;});
  if(mode==='observer-throws')await context.addInitScript(()=>{window.IntersectionObserver=class{constructor(){throw new Error('simulated unavailable observer')}};});
  const page=await context.newPage();await page.goto('http://127.0.0.1:3011',{waitUntil:'networkidle'});
  const card=page.locator('[data-motion-reveal]').first();await card.scrollIntoViewIfNeeded();
  assert.equal(await card.evaluate(el=>getComputedStyle(el).opacity),'1');assert.equal(await card.isVisible(),true);results.push({fallback:mode,visible:true});await context.close();
 }
 const touch=await browser.newContext({viewport:{width:400,height:900},isMobile:true,hasTouch:true});const p=await touch.newPage();await p.goto('http://127.0.0.1:3011',{waitUntil:'networkidle'});
 await p.getByRole('button',{name:'Menu',exact:true}).tap();await p.getByRole('navigation').getByRole('link',{name:'Projects',exact:true}).tap();
 await p.locator('[data-motion-reveal]').first().tap();assert.equal(await p.locator('[data-motion-reveal]').first().evaluate(el=>getComputedStyle(el).transform),'none');
 results.push({touchHover:'no movement',mobileMenu:'passed'});await touch.close();
 console.log(JSON.stringify(results,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
