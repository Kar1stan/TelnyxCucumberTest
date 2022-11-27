import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import LogInPage from "../../pages/LogIn.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks Log In button", () => {
    cy.visit("https://portal.telnyx.com/?_gl=1*1azppoz*_ga*NTQ3ODA0MDc1LjE2Njc1NjYzMDU.*_ga_ZPM4K1DLND*MTY2NzY0OTM5NC40LjEuMTY2NzY1MzAxMC4wLjAuMA..#/login/sign-in");
  });

  const loginPage = new LogInPage();

  When("A user enters the email {string}, the password {string} and clicks on the Log in button", (email,password) => {
    loginPage.fillEmail(email);
    loginPage.fillPassword(password);
    loginPage.clickSubmitBtn();
  });
 
  Then("The error message confirm email error will be displayed", () => {
    loginPage.logInError.should('be.visible');
  });
  
  When("A user enters the email {string}, and incorrect password with 4 symbols {string}, and clicks on the Log in button", (email,wrongPasswordWithFourSymbols) => {
    loginPage.fillEmail(email);
    loginPage.fillPassword(wrongPasswordWithFourSymbols);
    loginPage.clickSubmitBtn();
  });

  Then("The url of the page won't change and incorrect password error message will be displayed", () => {
    loginPage.logInError.should('be.visible');
  });

  When("A user leave all credentials empty, and clicks on the Log in button", () => {
    loginPage.fillLogInWithEmptyCredentials();
  });

  Then("The url of the page won't change and incorrect error inputs messages will be displayed", () => {
    cy.url().should('include','/login/sign-in');
  });

  When("A user clicks Single Sign-On button, enters false company email without @ symbol {string}, and clicks on the Continue button", (falsemailWithoutAtSymbol) => {
    loginPage.fillCompanyEmail(falsemailWithoutAtSymbol);
  });

  Then("The error message request not found will be displayed 1", () => {
    loginPage.logInErrorRequestNotFound.should('be.visible');
  });

  When("A user clicks Single Sign-On button, clicks company name button , enters false business name with 4 numbers {string}, and clicks on the Continue button", (falsenameWithFourNumbers) => {
    loginPage.fillBusinessName(falsenameWithFourNumbers);
  });

  Then("The error message request not found will be displayed 2", () => {
    loginPage.logInErrorRequestNotFound.should('be.visible');
  });
