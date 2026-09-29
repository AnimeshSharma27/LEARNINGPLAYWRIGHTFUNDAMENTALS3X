import {test , expect} from '@playwright/test';

test("Webtable task", async ({page}) => {


 await page.goto("https://app.thetestingacademy.com/playwright/webtable");

 //table [@aria-label='Employee Management System table']/tbody/tr[3]/td[2]

const firstPart = "//table [@aria-label='Employee Management System table']/tbody/tr[";
const secondPart = "]/td[";
const thirdPart = "]";

const rows = await page.locator("//table [@aria-label='Employee Management System table']/tbody/tr").count();
const cols = await page.locator("//table [@aria-label='Employee Management System table']/tbody/tr[3]/td").count();

for (let i = 1; i <= rows; i++) {

      for (let j = 1; j <= cols; j++) {

         const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
         const data = await page.locator(dynamicPath).innerText();
         
          if (data.includes('Rohan.Mehta')) {
             const checkboxPath = `${dynamicPath}/preceding-sibling::td//input[@type="checkbox"]`; 
             await page.locator(checkboxPath).check();
             console.log('------');
             expect(await page.locator(checkboxPath).isChecked()).toBeTruthy();
          }

        }
    }
});