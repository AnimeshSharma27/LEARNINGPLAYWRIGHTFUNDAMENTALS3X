import {chromium} from 'playwright';
import dotenv from 'dotenv';
dotenv.config();
async function saveSession()  {
    
    const VWO_USER = process.env.VWO_USER;
    const VWO_PASS = process.env.VWO_PASS;

    let browser = await chromium.launch({headless : false});
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(2000);
    
    await page.fill("#login-username", VWO_USER);
    await page.fill("#login-password", VWO_PASS);
    

    await page.click("#js-login-btn");
    await page.waitForURL(/#\/(dashboard|home)/,{timeout: 15000});
    

    await context.storageState({path : "./user-session.json"});
    console.log("Session saved to user-session successfully");
    

    await browser.close();
};

saveSession();