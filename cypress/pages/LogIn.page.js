
class LogInPage {
    elements={
        footerLogInBtn(){
        return cy.xpath("//span[text()='Log In']")
        },
        emailInput(){
        return cy.get("form>div>div>label>span~div>div>input[name='email']")
        },
        passwordInput(){
        return cy.get("input[name='password']")
        },
        submitBtn(){
        return cy.xpath("//button[text()='Log in']")
        },
        logInError(){
        return cy.get("div[type='error']")
        },
        singleSignOnBtn(){
        return cy.xpath("//button[text()='Single Sign-On']")
        },
        businessNameInput(){
        return cy.get("input[name='short_name']")
        },
       companyEmailInput(){
        return cy.get("input[placeholder='e.g. jane@acme.com']")
        },
       continueBtn(){
        return cy.xpath("//button[text()='Continue']")
        },
       companyNameBtn(){
        return cy.xpath("//button[text()='company name']")
        },
       logInErrorRequestNotFound(){
        return cy.get("div[type='error']")
        //it's another error but div has not any other selector-usable trait except type,class is a computer fiction
        }
    }
    
    clickLogInSignUpLinkBtn(email,password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.submitBtn().click();
    }

    fillLogInWithValidCredentials(email,password2){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password2);
        this.elements.submitBtn().click();
    }

    fillLogInWithInvalidPassword(email,password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.submitBtn().click();
    }

    fillLogInWithEmptyCredentials(){
        this.elements.submitBtn().click();
    }

     fillLogInCompanyEmail(falsemail){
        this.elements.singleSignOnBtn().click();
        this.elements.companyEmailInput().type(falsemail);
        this.elements.continueBtn().click();
    }

     fillLogInBusinessName(falsename){
        this.elements.singleSignOnBtn().click();
        this.elements.companyNameBtn().click();
        this.elements.businessNameInput().type(falsename);
        this.elements.continueBtn().click();
    }
}
module.exports = new LogInPage();