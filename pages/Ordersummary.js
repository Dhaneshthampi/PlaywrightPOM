class Ordersummary{
    constructor(page){
        this.page = page;
        this.finish = page.getByRole("button", {name: "Finish" });
        this.home = page.getByRole("button", {name: "Back Home" });
    }

    async completed(){
        await this.finish.click();
        await this.home.click();
    }
}

module.exports = Ordersummary;