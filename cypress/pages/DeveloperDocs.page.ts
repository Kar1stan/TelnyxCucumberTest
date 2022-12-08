
class DeveloperDocsPage {
        get footerDeveloperDocsBtn(){
            return cy.get("a[href='https://developers.telnyx.com/docs/v2']>span")
        }

        get developmentBtn(){
            return cy.get("div[alt='developer icon']~span")
        }

        get sdkSetupBtn(){
            return cy.xpath("//a[text()='SDK Setup']",{ timeout: 5000 })
        }

        get nodeBtn(){
            return cy.get("#tab-Node")
        }

    clickDeveloperDocsBtn(){
        this.footerDeveloperDocsBtn.scrollIntoView();
        this.footerDeveloperDocsBtn.click();
    }

    clickDevelopmentBtn(){
        this.developmentBtn.click({force:true})
    }

    clickSDKSetupBtn(){
        this.sdkSetupBtn.click();
    }
}
export default new DeveloperDocsPage();
