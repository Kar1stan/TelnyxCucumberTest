import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../pages/SignUp.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks Sign Up button", () => {
    cy.visit("/");
  });

  When("A user enters the email {string},the fullname {string},the password {string},clicks Terms and Conditions checkbox and clicks on the Create Account button", (email,fullname,password) => {
    MainPage.clickAcceptCookiesBtn();
    SignUpPage.clickSignUpBtn();
    SignUpPage.fillEmail(email);
    SignUpPage.fillFullname(fullname);
    SignUpPage.fillPassword(password);
    SignUpPage.clickTermAndConditionsCheckbox();
    SignUpPage.clickCreateAccountBtn();
  });
 
  Then("The user will be on the verify email page", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });
 
  When("A user enters incorrect password to lower case {string}, and clicks on the Create Account button", (invalidPasswordToLowerCase) => {
   SignUpPage.clickSignUpBtn();
   SignUpPage.fillFullname(invalidPasswordToLowerCase);
   SignUpPage.clickTermAndConditionsCheckbox();
   SignUpPage.clickCreateAccountBtn();
  });

  Then("The user must be on the Sign Up page 1", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });
  
  When("A user leave all credentials empty, and clicks on the Create Account button", () => {
    SignUpPage.signUpWithEmptyCredentials();
  });

  Then("The user must be on the Sign Up page 2", () => {
    cy.url().should('eq','https://telnyx.com/sign-up');
  });

  When("A user clicks Log In button", () => {
    SignUpPage.clickSignUpBtn()
    SignUpPage.signUpWithLogInLinkButton();
  });

  Then("The user must be on the Log In page", () => {
    cy.url().should('include','/login/sign-in');
  });

  