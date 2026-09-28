import { test, expect } from "@playwright/test";

test("getByRole test", async ({ page }) => {
  page.goto("https://katalon-demo-cura.herokuapp.com/");

  let mainbutton = await page
    .getByRole("link", { name: "Make Appointment", exact: true })
    .click();

  await page.pause();
});
