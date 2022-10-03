import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const compareCostsPage = require("../../pages/CompareCosts.page");
  
  Given("A web browser is at the telnyx home page", () => {
    cy.visit("/");
  });
  
  When("A user clicks No,Toll-free numbers buttons", () => {
    compareCostsPage.ConfigurateVoice();
  });
   
  Then("Both buttons are green", () => {});