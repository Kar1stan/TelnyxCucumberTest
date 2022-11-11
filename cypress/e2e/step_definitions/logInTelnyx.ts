import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {LogInPage} from "../../pages/LogIn.page";
import {MainPage} from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks Log In button", () => {
    cy.visit("https://portal.telnyx.com/?_gl=1*1azppoz*_ga*NTQ3ODA0MDc1LjE2Njc1NjYzMDU.*_ga_ZPM4K1DLND*MTY2NzY0OTM5NC40LjEuMTY2NzY1MzAxMC4wLjAuMA..#/login/sign-in");
  });

  When("A user enters the email {string}, the password {string} and clicks on the Log in button", (email,password) => {
    const loginPage = new LogInPage();
    loginPage.fillEmail(email);
    loginPage.fillPassword(password);
    loginPage.clickSubmitBtn();
  });
 
  Then("The error message confirm email error will be displayed", () => {
    const loginPage = new LogInPage();
    loginPage.logInError().should('be.visible');
  });
  
  When("A user enters the email {string}, and incorrect password with 4 symbols {string}, and clicks on the Log in button", (email,wrong_password) => {
    const loginPage = new LogInPage();
    loginPage.fillEmail(email);
    loginPage.fillPassword(wrong_password);
    loginPage.clickSubmitBtn();
  });

  Then("The url of the page won't change and incorrect password error message will be displayed", () => {
    const loginPage = new LogInPage();
    loginPage.logInError().should('be.visible');
  });

  When("A user leave all credentials empty, and clicks on the Log in button", () => {
    const loginPage = new LogInPage();
    loginPage.fillLogInWithEmptyCredentials();
  });

  Then("The url of the page won't change and incorrect error inputs messages will be displayed", () => {
    cy.url().should('include','/login/sign-in');
  });

  When("A user clicks Single Sign-On button, enters false company email {string}, and clicks on the Continue button", (falsemail) => {
    const loginPage = new LogInPage();
    loginPage.fillCompanyEmail(falsemail);
  });

  Then("The error message request not found will be displayed 1", () => {
    const loginPage = new LogInPage();
    loginPage.logInErrorRequestNotFound().should('be.visible');
  });

  When("A user clicks Single Sign-On button, clicks company name button , enters false business name {string}, and clicks on the Continue button", (falsename) => {
    const loginPage = new LogInPage();
    loginPage.fillBusinessName(falsename);
  });

  Then("The error message request not found will be displayed 2", () => {
    const loginPage = new LogInPage();
    loginPage.logInErrorRequestNotFound().should('be.visible');
  });
