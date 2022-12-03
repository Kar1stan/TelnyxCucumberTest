
class LogInPage {
        get footerLogInBtn(){
        return cy.xpath("//span[text()='Log In']")
        }

        get emailInput(){
        return cy.get("form>div>div>label>span~div>div>input[name='email']")
        }

        get passwordInput(){
        return cy.get("input[name='password']")
        }

        get submitBtn(){
        return cy.xpath("//button[text()='Log in']")
        }

        get logInError(){
        return cy.get("div[type='error']",{timeout:10_000})
        }

        get singleSignOnBtn(){
        return cy.xpath("//button[text()='Single Sign-On']")
        }

        get businessNameInput(){
        return cy.get("input[name='short_name']")
        }

        get companyEmailInput(){
        return cy.get("input[placeholder='e.g. jane@acme.com']")
        }

        get continueBtn(){
        return cy.xpath("//button[text()='Continue']")
        }

        get companyNameBtn(){
        return cy.xpath("//button[text()='company name']")
        }

        get logInErrorRequestNotFound(){
        return cy.get("div[type='error']")
        }
    
    clickLogInBtn(){
        this.footerLogInBtn.scrollIntoView();
        this.footerLogInBtn.click();
    }

    fillEmail(email){
        this.emailInput.type(email);
    }

    fillPassword(password){
        this.passwordInput.type(password);
    }

    clickSubmitBtn(){
        this.submitBtn.click();
    }

    fillLogInWithEmptyCredentials(){
        this.submitBtn.click();
    }

    clickSingleSignOnBtn(){
        this.singleSignOnBtn.click();
    }

    fillCompanyEmail(email){
        this.companyEmailInput.type(email);
    }

    clickCompanyName(){
        this.companyNameBtn.click();     
    }

    fillBusinessName(name){
        this.businessNameInput.type(name);
    }

    clickContinueBtn(){
        this.continueBtn.click();
    }
}
export default new LogInPage();