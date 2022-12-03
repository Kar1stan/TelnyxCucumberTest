
class SignUpPage{
        get footerSignUpBtn(){
         return cy.xpath("//span[text()='Sign up']")
        }

        get emailInput(){
         return cy.get("#email")
        }
    
        get fullnameInput(){
         return cy.get("#full_name")
        }
    
        get passwordInput(){
         return cy.get("#password")
        }
    
        get termsConditionsCheckbox(){
         return cy.get("div[aria-labelledby='terms-label']")
        }
    
        get createAccountBtn(){
         return cy.get("button[type='submit']")
        }
    
        get signUpLogInLinkBtn(){
         return cy.xpath("//a[text()='Log in']")
        }
    
   clickSignUpBtn(){
      this.footerSignUpBtn.scrollIntoView();
      this.footerSignUpBtn.click();
   }
    
   fillEmail(email){
      this.emailInput.type(email);
      this.createAccountBtn.dblclick();
   }
    
   fillFullname(fullname){
      this.fullnameInput.type(fullname);
   }
    
   clickTermAndConditionsCheckbox(){
      this.termsConditionsCheckbox.click();
   }
    
   fillPassword(password){
      this.passwordInput.type(password);
   }
    
   clickCreateAccountBtn(){
      this.createAccountBtn.dblclick();
   }
    
   signUpWithEmptyCredentials(){
      this.clickSignUpBtn();
      this.createAccountBtn.click();
   }
    
   signUpWithLogInLinkButton(){
      this.signUpLogInLinkBtn.click();
   }
  
}
export default new SignUpPage();
