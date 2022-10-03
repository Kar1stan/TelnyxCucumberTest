import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const supportCenterPage = require("../../pages/SupportCenter.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Support Center button", () => {
    cy.visit("https://support.telnyx.com/en/");
  });

  When("A user clicks Reference Material header and Accessible Canada Act header", () => {
    supportCenterPage.clickAccessibleCanadaActInReferenceMaterial();
  });
  
    
  Then("The Accessible Canada Act page will be opened", () => {
    cy.url().should('include','/6228388-accessible-canada-act-aca-feedback-process-description');
  });