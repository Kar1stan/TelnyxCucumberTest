
class SignUpPage{
   elements={
        acceptCloseBtn(){
         return cy.xpath("//button[text()='Accept and close']")
        },
        footerSignUpBtn(){
         return cy.xpath("//span[text()='Sign up']")
        },
        emailInput(){
         return cy.get("#email")
        },
        fullnameInput(){
         return cy.get("#full_name")
        },
        passwordInput(){
         return cy.get("#password")
        },
        termsConditionsCheckbox(){
         return cy.get("div[aria-labelledby='terms-label']")
         //it's not an actual checkbox because it has display:none attribute it's the parent element
        },
        createAccountBtn(){
         return cy.get("button[type='submit']")
        },
        signUpLogInLinkBtn(){
         return cy.xpath("//a[text()='Log in']")
        }
   }
   fillSignUpWithValidCredentials(email,fullname,password){
      this.elements.emailInput().type(email,{ force: true});
      this.elements.fullnameInput().type(fullname,{ force: true});
      this.elements.passwordInput().type(password,{ force: true});
      this.elements.termsConditionsCheckbox().click({ force: true});
      this.elements.createAccountBtn().dblclick({ force: true}); 
   }

   fillSignUpWithInvalidPassword(wrongpassword){ 
      this.elements.passwordInput().type(wrongpassword,{ force: true});
      this.elements.createAccountBtn().click({ force: true});
   }

   fillSignUpWithEmptyCredentials(){
      this.elements.createAccountBtn().click({ force: true});
   }

   clickSignUpWithLogInLinkButton(){
      this.elements.signUpLogInLinkBtn().click({ force: true});
   }
    
}
module.exports = new SignUpPage();
