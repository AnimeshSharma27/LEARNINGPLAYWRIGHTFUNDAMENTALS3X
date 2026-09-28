import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test.describe.configure({ mode: "serial" });

test("Task: agent update", async ({ page }) => {
  await page.goto("https://www.naukri.com/");

  await page.locator("#login_Layer").click();
  let usernameField = await page.locator("//input[@type='text']").first();
  await usernameField.fill(process.env.NAUKRI_USER!);
  let passwordField = await page.locator("//input[@type='password']");
  await passwordField.fill(process.env.NAUKRI_PASS!);
  await page.locator("//button[@class='btn-primary loginButton']").click();
  await page.waitForTimeout(3000);
  const homePageURL = await page.url();
  console.log("Home page URL is : " + homePageURL);
  expect(homePageURL).toContain("https://www.naukri.com/mnjuser/homepage");
  await page.locator("//a[@href='/mnjuser/profile']").first().click();
  await page.waitForTimeout(3000);
  await page.locator("//span[@class='edit icon']").first().click();
  await page.waitForTimeout(3000);
  // let resumeHeadlineField = await page.locator("//textarea[@id='resumeHeadlineTxt']");
  // await resumeHeadlineField.click();
  const box = page.locator("//textarea[@id='resumeHeadlineTxt']");
  const current = await box.inputValue();
  await box.fill(current + ".");
  await page.waitForTimeout(3000);
  await page.locator("//button[@class='btn-dark-ot']").last().click();

  // const popupPromise = page.waitForEvent('popup');
  // await page.locator("//div[@class='ltLayer open']");
  // const popup = await popupPromise;

  // await popup.waitForLoadState();
  // await popup.locator("(//div[@class='crossLayer'])[6]/span[@class='icon']").click();

  // // let popup = await page.locator("//div[@class='ltLayer open']");

  // // await popup.waitFor({ state: 'visible' });
  // // await closebutton.click();
  // const homePageURL2 = await page.url();
  // console.log("Home page URL is : " + homePageURL2);
  // expect(homePageURL2).toContain("https://www.naukri.com/mnjuser/homepage");

  await page.close();
});

test("Task: agent update2", async ({ page }) => {
  await page.goto("https://www.naukri.com/");

  await page.locator("#login_Layer").click();
  let usernameField = await page.locator("//input[@type='text']").first();
  await usernameField.fill(process.env.NAUKRI_USER!);
  let passwordField = await page.locator("//input[@type='password']");
  await passwordField.fill(process.env.NAUKRI_PASS!);
  await page.locator("//button[@class='btn-primary loginButton']").click();
  await page.waitForTimeout(3000);
  const homePageURL = await page.url();
  console.log("Home page URL is : " + homePageURL);
  expect(homePageURL).toContain("https://www.naukri.com/mnjuser/homepage");
  await page.locator("//a[@href='/mnjuser/profile']").first().click();
  await page.waitForTimeout(3000);
  await page.locator("//span[@class='edit icon']").first().click();
  await page.waitForTimeout(3000);
  // let resumeHeadlineField = await page.locator("//textarea[@id='resumeHeadlineTxt']");
  // await resumeHeadlineField.click();
  const box = page.locator("//textarea[@id='resumeHeadlineTxt']");
  await box.click();
  await box.press("Control+End"); // cursor to the very end of the textarea
  await box.press("Backspace");
  await page.waitForTimeout(3000);
  await page.locator("//button[@class='btn-dark-ot']").last().click();

  await page.close();
});
