
class SupportCenterPage {
    elements={
        footerSupportCenterBtn(){
            return cy.xpath("//span[text()='Support Center']")
        },
        headerReferenceMaterial(){
            return cy.xpath("//h2[text()='Reference Material']")
        },
        spanAccessibleCanadaAct(){
            return cy.xpath("//span[text()='Accessible Canada Act (ACA): Feedback Process Description']")
        },
    }
    clickAccessibleCanadaActInReferenceMaterial(){
        this.elements.headerReferenceMaterial().click({ force: true});
        this.elements.spanAccessibleCanadaAct().click({ force: true});
    }
}
module.exports = new SupportCenterPage();