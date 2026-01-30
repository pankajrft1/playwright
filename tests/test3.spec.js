import {test, expect} from '@playwright/test'

test('verify Login', async({page}) => {

await page.goto('https://playwright.dev/');
await page.waitForTimeout(5000);

const abc = await expect(page).toHaveTitle(/Playwright/);
await page.waitForTimeout(5000);
console.log("sdfs"+ abc);

});