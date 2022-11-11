
export class StoragePage {
        SMSBtn(){
            return cy.xpath("//button[text()='SMS']")
        }

        labelNo(){
            return cy.xpath("//label[text()='No']")
        }

        tollFreeNumbersLabel(){
            return cy.xpath("//label[text()='Toll-free numbers']")
        }

        speakToOurExpertsBtn(){
            return cy.xpath("//a[text()='Speak to our experts']")
        }

        jointheWaitlistBtn(){
            return cy.xpath("//a[text()='JOIN THE WAITLIST.']")
        }

        TryForFreeBtn(){
            return cy.xpath("//span[text()='Try for free']")
        }

        emailInput(){
            return cy.get("input[name='email']")
        }

    checkEmailFormTelnyx(email){
        this.emailInput().type(email);
        this.TryForFreeBtn().click();
    }
    
}
