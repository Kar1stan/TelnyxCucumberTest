
class StoragePage {
        get SMSBtn(){
            return cy.xpath("//button[text()='SMS']")
        }

        get labelNo(){
            return cy.xpath("//label[text()='No']")
        }

        get tollFreeNumbersLabel(){
            return cy.xpath("//label[text()='Toll-free numbers']")
        }

        get speakToOurExpertsBtn(){
            return cy.xpath("//a[text()='Speak to our experts']")
        }

        get jointheWaitlistBtn(){
            return cy.xpath("//a[text()='JOIN THE WAITLIST.']")
        }

        get tryForFreeBtn(){
            return cy.xpath("//span[text()='Try for free']")
        }

        get emailInput(){
            return cy.get("input[name='email']")
        }

    fillEmailFormTelnyx(email){
        this.emailInput.type(email);
    }

    clickTryForFreeBtn(){
        this.tryForFreeBtn.click();
    }
    
}
export default new StoragePage();