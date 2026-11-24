
import { expect, test } from "@playwright/test";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Ordersummary from "../pages/Ordersummary";
test("saucedemo cart", async ({ page }) => {
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    const dashboard = new Dashboard(page);
    await dashboard.addItem();
    const element2 = page.locator('[data-test="shopping-cart-badge"]');
    await expect(element2).toHaveText("3");
    await dashboard.removeItem();

    const cart = new Cart(page);
    await cart.gotoCart();
    await cart.checkout();

    const check = new Checkout(page);
        check.checkoutfun();

    const order = new Ordersummary(page);
    order.completed()    

});
