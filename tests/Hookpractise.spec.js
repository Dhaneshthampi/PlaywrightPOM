import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('file:///D:/Playwright_Training/Js%20code%20Files/locators-practice.html');
});

test.afterEach(async ({ page }) => {
    console.log('Current URL:', page.url());
});

test("Enter values", async({page})=>{
    await page.locator("#first-name").fill("hi");
});

test("Click radio", async({page})=>{
    await page.locator("#os-windows").click();
});