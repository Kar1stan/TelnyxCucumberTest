
class DataPrivacyPage {
    elements={
        footerDataPrivacyBtn(){
            return cy.xpath("//span[text()='Data & Privacy']")
        },
        overviewBtn(){
            return cy.xpath("//button[text()='Overview']")
        },
        pageBtn(){
            return cy.xpath("//a[text()='page']")
        },
    }
    clickPrivacyLinkInOverviewBtn(){
        this.elements.overviewBtn().scrollIntoView();
        this.elements.pageBtn().click({ force: true});
    }
}
module.exports = new DataPrivacyPage();