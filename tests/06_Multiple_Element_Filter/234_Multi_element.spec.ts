import {test , expect} from '@playwright/test';

test("Basic Verify  how to handle multiple elements", async ({page}) => {
  
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksText: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinksText.length);

    for (const link of rightPanelLinksText) {
        console.log(link);
    }

    for(const linkText of rightPanelLinksText){
        if( linkText === "Forgotten Password"){
             await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

    await page.pause();

});