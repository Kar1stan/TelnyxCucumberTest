
export class DeveloperDocsPage {
        footerDeveloperDocsBtn(){
            return cy.get("a[href='https://developers.telnyx.com/docs/v2']>span")
        }

        DevelopmentBtn(){
            return cy.get("div[alt='developer icon']~span")
        }

        sdkSetupBtn(){
            return cy.xpath("//a[text()='SDK Setup']")
        }

        tabpanelNode(){
            return cy.get("#tabpanel-Node")
        }

    clickDeveloperDocsBtn(){
        this.footerDeveloperDocsBtn().scrollIntoView();
        this.footerDeveloperDocsBtn().click();
    }

    clickSDKSetupLinkInDevelopmentBtn(){
        this.DevelopmentBtn().click({force:true})
        this.sdkSetupBtn().click();
    }
}
