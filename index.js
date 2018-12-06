const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('http://liz-bluebird.com/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
