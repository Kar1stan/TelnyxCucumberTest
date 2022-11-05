
export class SignUpPage{
        footerSignUpBtn(){
         return cy.xpath("//span[text()='Sign up']")
        }

        emailInput(){
         return cy.get("#email")
        }
    
        fullnameInput(){
         return cy.get("#full_name")
        }
    
        passwordInput(){
         return cy.get("#password")
        }
    
        termsConditionsCheckbox(){
         return cy.get("div[aria-labelledby='terms-label']")
        }
    
        createAccountBtn(){
         return cy.get("button[type='submit']")
        }
    
        signUpLogInLinkBtn(){
         return cy.xpath("//a[text()='Log in']")
        }
    
   clickSignUpBtn(){
      this.footerSignUpBtn().scrollIntoView();
      this.footerSignUpBtn().click();
   }
    
   fillSignUpEmail(email){
      this.emailInput().type(email);
      this.createAccountBtn().dblclick();
   }
    
   fillSignUpFullname(fullname){
      this.fullnameInput().type(fullname);
   }
    
   clickTermAndConditionsCheckbox(){
      this.termsConditionsCheckbox().click();
   }
    
   fillSignUpPassword(password){
      this.passwordInput().type(password);
   }
    
   clickCreateAccountBtn(){
      this.createAccountBtn().dblclick();
   }
    
   signUpWithInvalidPassword(wrongpassword){
      this.clickSignUpBtn();
      this.passwordInput().type(wrongpassword);
      this.createAccountBtn().click();
   }
    
   signUpWithEmptyCredentials(){
      this.clickSignUpBtn();
      this.createAccountBtn().click();
   }
    
   signUpWithLogInLinkButton(){
      this.clickSignUpBtn();
      this.signUpLogInLinkBtn().click();
   }
  
}

