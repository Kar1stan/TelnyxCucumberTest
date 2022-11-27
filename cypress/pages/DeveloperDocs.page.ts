
export default class DeveloperDocsPage {
        get footerDeveloperDocsBtn(){
            return cy.get("a[href='https://developers.telnyx.com/docs/v2']>span")
        }

        get DevelopmentBtn(){
            return cy.get("div[alt='developer icon']~span")
        }

        get sdkSetupBtn(){
            return cy.xpath("//a[text()='SDK Setup']")
        }

        get nodeBtn(){
            return cy.get("#tab-Node")
        }

    clickDeveloperDocsBtn(){
        this.footerDeveloperDocsBtn.scrollIntoView();
        this.footerDeveloperDocsBtn.click();
    }

    clickSDKSetupLinkInDevelopmentBtn(){
        this.DevelopmentBtn.click({force:true})
        this.sdkSetupBtn.click();
    }
}
