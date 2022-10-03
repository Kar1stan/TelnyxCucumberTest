import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const dataPrivacyPage = require("../../pages/Data&Privacy.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Data & Privacy button", () => {
    cy.visit("https://telnyx.com/company/data-privacy");
  });

  When("A user scroll to Overview button and clicks page button", () => {
    dataPrivacyPage.clickPrivacyLinkInOverviewBtn();
  });
   
  Then("A user will be redirected to the privacy policy page", () => {});