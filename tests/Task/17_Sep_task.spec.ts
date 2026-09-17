import {test,expect} from '@playwright/test';

test("17_Sep_task",async({page})=> {

   let mainURL= await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter#my-account");

   const currentURL = await page.url();
   console.log("Current URL is : "+currentURL);

    let emailAddressField = await page.locator("#email");
    let passwordField = await page.locator("#password");
    let loginButton = await page.locator("#login");
   

    await emailAddressField.fill("student@testestingacademy.com");
    await passwordField.fill("password");
    await page.locator("(//input[@name='remember'])[1]").click();
    await loginButton.click();

    const newURL = await page.url();
    console.log("New URL is : "+newURL);


});