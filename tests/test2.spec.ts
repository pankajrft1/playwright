import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');

test('Detect broken links', async ({ page, request }) => {
  await page.goto('https://playwright.dev/');

  const links = await page.$$eval('a', elements =>
    elements
      .map(el => el.href)
      .filter(href => href && href.startsWith('http'))
  );

  console.log(`Total links found: ${links.length}`);

  for (const link of links) {
    const response = await request.get(link);
    const status = response.status();

    if (status >= 400) {
      console.log(`❌ Broken link: ${link} → ${status}`);
    } else {
      console.log(`✅ Valid link: ${link} → ${status}`);
    }
  }
});
