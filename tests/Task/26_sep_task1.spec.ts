import { test, expect } from '@playwright/test';

test("OrangeHRM task", async ({ page }) => {

    //test.describe.configure({ timeout: 60000 });
    // Navigate to the OrangeHRM login page
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // Locate the username and password input fields and fill them with credentials
const username = await page.getByRole("textbox", { name: "Username", exact: true}).fill("Admin");
//await page.waitForTimeout(3000);
const password = await page.getByRole("textbox", { name: "Password", exact: true}).fill("admin123");
const loginButton = await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000);

  // Wait for the dashboard to load and verify that the login was successful
const newURL = await page.url();
console.log(newURL);
await expect(newURL).toContain('dashboard');

const PIM =  await page.getByRole('link', { name: 'PIM' }).click();
//await page.waitForTimeout(8000);

const pimURL = await page.url();
console.log(pimURL);
await expect(pimURL).toContain('viewEmployeeList');
//await page.pause();
const addbutton = await page.getByRole("button",{ name: "Add"}).click();

const firstName = await page.getByPlaceholder('First Name').fill("TESTER");
const lastName = await page.getByPlaceholder('Last Name').fill("TURNER");
const empId = await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('1214');
const savebutton = await page.getByRole("button",{name:"Save"}).click();
await page.waitForTimeout(3000);
await page.getByRole("link",{name:"Employee List"}).click();

await page.waitForTimeout(3000);
await page.locator("(//input[@placeholder='Type for hints...'])[1]").fill("TESTER");
// await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1219");
await page.getByRole("button",{name:"search"}).click();
///div[@class='orangehrm-container']/div/div[2]/div[3]/div/div[3]
await page.pause();
// const firstPart = "//div[@class='orangehrm-container']/div/div[";
// const secondPart = "]/div[";
// const thirdPart = "]";

// const rows = await page.locator("//div[@class='orangehrm-container']/div/div").count();
// const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

const data = await page.locator("//div[@class='orangehrm-container']/div/div[2]").innerText();
console.log(data);



});