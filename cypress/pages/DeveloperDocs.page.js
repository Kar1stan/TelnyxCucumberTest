
class DeveloperDocsPage {
    elements={
        footerDeveloperDocsBtn(){
            return cy.xpath("//span[text()='Developer Docs']")
        },
        DevelopmentBtn(){
            return cy.get("div[alt='developer icon']~span")
        },
        sdkSetupBtn(){
            return cy.xpath("//a[text()='SDK Setup']")
        },
        tabpanelNode(){
            return cy.get("#tabpanel-Node")
        }
    }
    clickSDKSetupLinkInDevelopmentBtn(){
        this.elements.DevelopmentBtn().click({ force: true});
        this.elements.sdkSetupBtn().click({ force: true});
    }
}
module.exports = new DeveloperDocsPage();