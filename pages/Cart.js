class Cart{
    constructor(page){
        this.page = page
        this.cartPage = page.locator('[data-test="shopping-cart-link"]');
        this.removeItem = page.locator('#remove-sauce-labs-bolt-t-shirt');
        this.continueShopping = page.locator("#continue-shopping");
        this.checkoutItem = page.locator("#checkout");
    }
    async gotoCart(){
       await this.cartPage.click()
       await this.removeItem.click()
       await this.continueShopping.click();
       await this.cartPage.click()
    }

    async checkout(){
        await this.checkoutItem.click();
    }
}

module.exports = Cart;