import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const signUpPage = require("../../pages/SignUp.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Sign Up button", () => {
    cy.visit("https://telnyx.com/sign-up");
  });

  When("A user enters the email {string},the fullname {string},the password {string},clicks Terms and Conditions checkbox and clicks on the Create Account button", (email,fullname,password) => {
    signUpPage.fillSignUpWithValidCredentials(email,fullname,password);
  });
 
  Then("The user will be on the verify email page", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });
 
  When("A user enters incorrect password {string}, and clicks on the Create Account button", (wrongpassword) => {
   signUpPage.fillSignUpWithInvalidPassword(wrongpassword);
  });

  Then("The user must be on the Sign Up page 1", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });
  
  When("A user leave all credentials empty, and clicks on the Create Account button", () => {
    signUpPage.fillSignUpWithEmptyCredentials();
  });

  Then("The user must be on the Sign Up page 2", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });

  When("A user clicks Log In button", () => {
    signUpPage.clickSignUpWithLogInLinkButton();
  });

  Then("The user must be on the Log In page", () => {
    cy.url().should('include','/login/sign-in');
  });

  