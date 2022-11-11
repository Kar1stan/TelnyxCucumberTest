
export class LogInPage {
        footerLogInBtn(){
        return cy.xpath("//span[text()='Log In']")
        }

        emailInput(){
        return cy.get("form>div>div>label>span~div>div>input[name='email']")
        }

        passwordInput(){
        return cy.get("input[name='password']")
        }

        submitBtn(){
        return cy.xpath("//button[text()='Log in']")
        }

        logInError(){
        return cy.get("div[type='error']",{timeout:10_000})
        }

        singleSignOnBtn(){
        return cy.xpath("//button[text()='Single Sign-On']")
        }

        businessNameInput(){
        return cy.get("input[name='short_name']")
        }

       companyEmailInput(){
        return cy.get("input[placeholder='e.g. jane@acme.com']")
        }

       continueBtn(){
        return cy.xpath("//button[text()='Continue']")
        }

       companyNameBtn(){
        return cy.xpath("//button[text()='company name']")
        }

       logInErrorRequestNotFound(){
        return cy.get("div[type='error']")
        //it's another error but div has not any other selector-usable trait except type,class is a computer fiction
        }
    
    clickLogInBtn(){
        this.footerLogInBtn().scrollIntoView();
        this.footerLogInBtn().click();
    }

    fillEmail(email){
        this.emailInput().type(email);
    }

    fillPassword(password){
        this.passwordInput().type(password);
    }

    clickSubmitBtn(){
        this.submitBtn().click();
    }

    fillLogInWithEmptyCredentials(){
        this.submitBtn().click();
    }

     fillCompanyEmail(falsemail){
        this.singleSignOnBtn().click();
        this.companyEmailInput().type(falsemail);
        this.continueBtn().click();
    }

     fillBusinessName(falsename){
        this.singleSignOnBtn().click();
        this.companyNameBtn().click();
        this.businessNameInput().type(falsename);
        this.continueBtn().click();
    }
}