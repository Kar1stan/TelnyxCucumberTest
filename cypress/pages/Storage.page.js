
class StoragePage {
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
        },
        jointheWaitlistBtn(){
            return cy.xpath("//a[text()='JOIN THE WAITLIST.']")
        }
    }
    openCloadStoragePage(){
        this.elements.jointheWaitlistBtn().click({ force: true});
    }
    
}
module.exports = new StoragePage();
