import { test, expect, Locator } from '@playwright/test';

test("Practice to handle multiple elements", async ({page}) => {
 
    await page.goto("https://ultimateqa.com/automation");
    const allLinksText: Locator[] =  await page.locator('.et_pb_text_inner > ul li a').all();
    console.log(allLinksText.length);

    for (const link of allLinksText) {
        console.log(await link.getAttribute('href'));
    }
 
});