import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import StoragePage from "../../pages/Storage.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page", () => {
    cy.visit("/");
    MainPage.clickAcceptCookiesBtn();
  });
  
  When("A user enter the email {string} and clicks Try for free button", (email) => {
    StoragePage.fillEmailFormTelnyx(email);
    StoragePage.clickTryForFreeBtn();
  });
   
  Then("The sign up page will be opened", () => {
    cy.url().should('include','/sign-up');
  });