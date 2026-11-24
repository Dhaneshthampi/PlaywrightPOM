class checkout{
    constructor(page){
        this.page = page;
        this.fname =  page.getByPlaceholder("First Name");
        this.lname = page.getByPlaceholder("Last Name");
        this.postal = page.getByPlaceholder("Zip/Postal Code");
        this.continue = page.getByRole("button", {name: "Continue" });
    }

    async checkoutfun(){
        await this.fname.fill("Testname");
        await this.lname.fill("TestLastname");
        await this.postal.fill("123456");
        await this.continue.click();
    }

}

module.exports = checkout;