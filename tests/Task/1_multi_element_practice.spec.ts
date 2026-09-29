import {test, expect} from '@playwright/test';

test("Practice to handle multiple elements", async ({page}) => {
 
    await page.goto("https://ultimateqa.com/automation");
    const allLinksText: string[] = await page.locator('.et_pb_text_inner > ul li a').allInnerTexts();

    console.log(allLinksText.length);

    for (const text of allLinksText) {
        console.log(text);
    }

    const allLinks = await page.locator('.et_pb_text_inner > ul li a').all();
    for (const link of allLinks) {
        console.log(await link.getAttribute("href"));
    }

    expect(allLinksText.length).toBe(7);

    expect(allLinksText).toContain("Fake Landing Page");

});