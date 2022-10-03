
class CompareCostsPage {
    elements={
        SMSBtn(){
            return cy.xpath("//button[text()='SMS']")
        },
        labelNo(){
            return cy.xpath("//label[text()='No']")
        },
        tollFreeNumbersLabel(){
            return cy.xpath("//label[text()='Toll-free numbers']")
        },
        speakToOurExpertsBtn(){
            return cy.xpath("//a[text()='Speak to our experts']")
        }
    }
    ConfigurateVoice(){
        this.elements.tollFreeNumbersLabel().scrollIntoView();
        this.elements.labelNo().click({ force: true});
        this.elements.tollFreeNumbersLabel().click({ force: true});
    }
}
module.exports = new CompareCostsPage();