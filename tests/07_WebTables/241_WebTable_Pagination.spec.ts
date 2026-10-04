import {test, expect,Locator} from '@playwright/test';

test('Verify the Webtable Example 4', async ({page}) => {

    page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name:string = "Luca Greco";
    let row;
    while (true) {
        row = await page.locator('#employees-tbody tr').filter({ hasText: name });

        if (await row.count()) {
            break;
        };

        const nextButton = page.getByTestId('next-page');
        if (await nextButton.isDisabled()) {
         throw new Error("Row not found!");
      }
      await nextButton.click();
    }

   const email = await row.locator('td[data-col="email"]').innerText();
   const country = await row.locator('td[data-col="country"]').innerText();


   console.log(email, country);

  await page.pause();


});