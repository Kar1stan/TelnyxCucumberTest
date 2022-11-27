import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import StoragePage from "../../pages/Storage.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page", () => {
    cy.visit("/");
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
  });
  
  When("A user enter the email {string} and clicks Try for free button", (email) => {
    const storagePage = new StoragePage();
    storagePage.checkEmailFormTelnyx(email);
  });
   
  Then("The sign up page will be opened", () => {
    cy.url().should('include','/sign-up');
  });