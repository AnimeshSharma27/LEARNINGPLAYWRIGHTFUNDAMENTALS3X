import { test, expect } from "@playwright/test";

//load the saved session from the file and use it in the test
test.use({
  storageState: "./user-session.json",
  screenshot: "only-on-failure",
});

test.describe.configure({ timeout: 60000 });

test("Verify the user is logged in using session storage - TEST1", async ({
  page,
}) => {
  await page.goto("https://app.wingify.com/#/dashboard?accountId=1283963", {
    waitUntil: "domcontentloaded",
  });
  await expect(page).toHaveURL(/dashboard/);
  console.log("User is logged in using session storage in TEST1");
});

test("Verify the user is logged in using session storage - TEST2", async ({
  page,
}) => {
  await page.goto("https://app.wingify.com/#/dashboard?accountId=1283963", {
    waitUntil: "domcontentloaded",
  });
  await expect(page).toHaveURL(/dashboard/);
  console.log("User is logged in using session storage in TEST2");
});

test("Verify the user is logged in using session storage - TEST3", async ({
  page,
}) => {
  await page.goto("https://app.wingify.com/#/dashboard?accountId=1283963", {
    waitUntil: "domcontentloaded",
  });

  await expect(page).toHaveURL(/dashboard/);
  console.log("User is logged in using session storage in TEST3");
});
