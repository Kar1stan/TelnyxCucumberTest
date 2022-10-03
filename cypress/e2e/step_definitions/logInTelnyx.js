import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const logInPage = require("../../pages/LogIn.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Log In button", () => {
    cy.visit("https://portal.telnyx.com/?_gl=1*jpu2h4*_ga*MTgyMTE3OTE0Ni4xNjY0Nzg3Njgy*_ga_ZPM4K1DLND*MTY2NDc5ODc4MC4zLjEuMTY2NDc5ODc4My4wLjAuMA..#/login/sign-in");
  });

  When("A user enters the email, the password and clicks on the Log in button", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.email);
      cy.log(row.password);
      logInPage.fillLogInWithValidCredentials(row.email,row.password);
     });
  });
 
  Then("The error message confirm email error will be displayed", () => {
    logInPage.elements.logInError().should('be.visible');
  });
  
  When("A user enters the email, and incorrect password, and clicks on the Log in button", (table) => {
    table.hashes().forEach((row) => {
    cy.log(row.email);
    cy.log(row.password2);
    logInPage.fillLogInWithInvalidPassword(row.email,row.password2);
   });
  });

  Then("The url of the page won't change and incorrect password error message will be displayed", () => {
    logInPage.elements.logInError().should('be.visible');
  });

  When("A user leave all credentials empty, and clicks on the Log in button", () => {
    logInPage.fillLogInWithEmptyCredentials();
  });

  Then("The url of the page won't change and incorrect error inputs messages will be displayed", () => {
    cy.url().should('include','/login/sign-in');
  });

  When("A user clicks Single Sign-On button, enters false company email {string}, and clicks on the Continue button", (falsemail) => {
    logInPage. fillLogInCompanyEmail(falsemail);
  });

  Then("The error message request not found will be displayed 1", () => {
    logInPage.elements.logInErrorRequestNotFound().should('be.visible');
  });

  When("A user clicks Single Sign-On button, clicks company name button , enters false business name {string}, and clicks on the Continue button", (falsename) => {
    logInPage.fillLogInBusinessName(falsename);
  });

  Then("The error message request not found will be displayed 2", () => {
    logInPage.elements.logInErrorRequestNotFound().should('be.visible');
  });
