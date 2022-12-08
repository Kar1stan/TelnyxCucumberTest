import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import DataPrivacyPage from "../../pages/DataPrivacy.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Data & Privacy button", () => {
    cy.visit("/");
    MainPage.clickAcceptCookiesBtn();
  });

  When("A user scroll to Overview button and clicks page button", () => {
    DataPrivacyPage.clickDataPrivacyBtn();
    DataPrivacyPage.clickPrivacyLinkInOverviewBtn();
  });
   
  Then("A user will be redirected to the privacy policy page", () => {
    cy.url().should('eq','https://telnyx.com/company/data-privacy');
  });
