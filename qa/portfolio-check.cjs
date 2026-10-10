const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const report = [];
  const projectUrls = new Set();
  for (const width of [1440, 400, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://127.0.0.1:3011', {waitUntil:'networkidle'});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    report.push({width, ...await page.evaluate(() => ({height:document.documentElement.scrollHeight, experience:document.querySelector('#experience').offsetTop, contact:document.querySelector('#contact').offsetTop}))});
    if (width < 768) {
      const menu = page.getByRole('button', {name:'Menu',exact:true});
      await menu.click();
      await page.keyboard.press('Escape');
      assert.equal(await menu.evaluate(el => el === document.activeElement), true);
      for (const name of ['Experience','Contact','Projects']) {
        await menu.click();
        await page.getByRole('navigation').getByRole('link',{name,exact:true}).click();
        assert.equal(await menu.getAttribute('aria-expanded'),'false');
        assert.equal(await page.evaluate(() => document.activeElement.id),name.toLowerCase());
      }
      await menu.focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.textContent),'Projects');
      await page.keyboard.press('Escape');
    }
    for (let i=0;i<2;i++) {
      const shot = page.getByRole('button',{name:'Enlarge Today look'});
      await shot.click();
      await page.getByRole('dialog').waitFor({state:'visible'});
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.closest('dialog') !== null),true);
      if (i===0) await page.keyboard.press('Escape'); else await page.getByRole('button',{name:'Close',exact:true}).click();
      await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Enlarge Today look');
      assert.equal(await shot.evaluate(el => el === document.activeElement),true);
      await page.waitForFunction(() => document.body.style.overflow === '');
    }
    await page.evaluate(() => window.scrollTo({top:0,behavior:'instant'}));
    await page.screenshot({path:`/tmp/portfolio-${width}.png`,fullPage:true});
    await page.getByRole('link',{name:'Case study',exact:false}).first().click();
    await page.waitForURL('**/projects/aura');
    assert.equal(await page.getByRole('heading',{name:'Problem',exact:true}).count(),1);
    await page.getByRole('button',{name:'Enlarge Digital closet'}).click();
    await page.keyboard.press('Escape');
    await page.goBack();
    await page.waitForURL('http://127.0.0.1:3011/**');
    await page.getByRole('button',{name:'Enlarge Today look'}).click();
    await page.keyboard.press('Escape');
  }
  for(const slug of ['aura','forge','llm-training-performance-lab','gpu-ai-performance-lab','comma-video-compression-challenge']) {
    await page.goto(`http://127.0.0.1:3011/projects/${slug}`);
    assert.equal(await page.locator('h1').count(),1);
    for (const href of await page.locator('a[href]').evaluateAll(links => links.map(a => a.getAttribute('href')))) projectUrls.add(href);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),true);
    await page.getByRole('link',{name:'Back to portfolio'}).click();
    await page.waitForURL('http://127.0.0.1:3011/');
  }
  const urls = [...new Set([...projectUrls, ...await page.locator('a[href]').evaluateAll(links => links.map(a => a.getAttribute('href')))])];
  const links = [];
  for(const url of urls.filter(url => url.startsWith('/') || url.startsWith('http'))) {
    try { const response=await page.request.get(url.startsWith('/') ? `http://127.0.0.1:3011${url}` : url, {timeout:15000}); links.push({url,status:response.status()}); } catch(error) {links.push({url,error:error.message.split('\n')[0]});}
  }
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({report,links,errors},null,2));
  await browser.close();
})().catch(error => {console.error(error);process.exit(1)});
