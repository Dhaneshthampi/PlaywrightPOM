import {expect,test} from "@playwright/test";
const Login = require('../pages/Login');// to import

test("saucedemo full automation POM", async({page})=>{
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");
});