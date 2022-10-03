import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const developerDocsPage = require("../../pages/DeveloperDocs.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Developer Docs buttons", () => {
    cy.visit("https://developers.telnyx.com/docs/v2?_gl=1*1mfebf4*_ga*MTgyMTE3OTE0Ni4xNjY0Nzg3Njgy*_ga_ZPM4K1DLND*MTY2NDgxMjMzNi40LjEuMTY2NDgxNDYwNS4wLjAuMA..");
  });

  When("A user clicks Development button and SDK Setup buttons", () => {
    developerDocsPage.clickSDKSetupLinkInDevelopmentBtn();
  });
   
  Then("Panel how to integrate telnyx is visible", () => {
    developerDocsPage.elements.tabpanelNode().should('be.visible');
  });