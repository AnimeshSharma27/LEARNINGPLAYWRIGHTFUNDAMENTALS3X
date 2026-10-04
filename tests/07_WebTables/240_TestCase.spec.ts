import { test,expect,Locator} from '@playwright/test';

test('Verify the Webtable Example 3', async ({page}) => {

page.goto("https://app.thetestingacademy.com/playwright/webtable");

// await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').click();

// expect(await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').isChecked()).toBeTruthy();

await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('input').first().click();

expect(await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('input').first().isChecked()).toBeTruthy();

await page.pause();


});