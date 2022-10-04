import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const storagePage = require("../../pages/Storage.page");
  
  Given("A web browser is at the telnyx home page", () => {
    cy.visit("/");
  });
  
  When("A user clicks JOIN THE WAITLIST. button", () => {
    storagePage.openCloadStoragePage();
  });
   
  Then("The products storage page will be opened", () => {
    cy.url().should('include','/products/storage');
  });
