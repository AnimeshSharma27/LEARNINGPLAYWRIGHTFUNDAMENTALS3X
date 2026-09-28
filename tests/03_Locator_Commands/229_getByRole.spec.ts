import { test, expect } from "@playwright/test";

test("getByRole test", async ({ page }) => {
  await page.goto("https://app.wingify.com/#/login");
  let username = await page.getByRole("textbox", {
    name: "Email",
    exact: true,
  });
  await username.fill("admin@vw.com");
  let password = await page.getByRole("textbox", {
    name: "Password",
    exact: true,
  });
  await password.fill("admin123");

  await page.pause();
});
