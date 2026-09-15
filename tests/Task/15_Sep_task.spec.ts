import { test, expect } from '@playwright/test';

test("Ketalon Demo", async ({ page }) => {
 await page.goto("https://katalon-demo-cura.herokuapp.com/",{
        waitUntil: 'domcontentloaded',
        timeout: 45000,
        referer: 'https://thetestingacademy.com'
    });

 let makeAppointmentButton = page.locator("#btn-make-appointment");   
    await makeAppointmentButton.click();

 
 let userNameField = page.locator("#txt-username");
 let passwordField = page.locator("#txt-password");
 let loginButton = page.locator("#btn-login");

    
    await userNameField.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();

    //await page.pause();

let makeAppointmentText = page.getByRole('heading', { name: 'Make Appointment' });

    await expect(makeAppointmentText).toContainText("Make Appointment");


});