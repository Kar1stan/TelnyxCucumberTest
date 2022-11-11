
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
    
   fillEmail(email){
      this.emailInput().type(email);
      this.createAccountBtn().dblclick();
   }
    
   fillFullname(fullname){
      this.fullnameInput().type(fullname);
   }
    
   clickTermAndConditionsCheckbox(){
      this.termsConditionsCheckbox().click();
   }
    
   fillPassword(password){
      this.passwordInput().type(password);
   }
    
   clickCreateAccountBtn(){
      this.createAccountBtn().dblclick();
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

