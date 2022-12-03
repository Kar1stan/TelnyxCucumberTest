class MainPage {
    get cookiesAcceptBtn(){
        return cy.xpath("//button[text()='Accept and close']")
    }

    clickAcceptCookiesBtn(){
       this.cookiesAcceptBtn.click();
    }

}
export default new MainPage();