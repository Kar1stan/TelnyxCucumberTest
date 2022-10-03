import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const aboutUsPage = require("../../pages/AboutUs.page");
  
  Given("A web browser is at the telnyx home page and clicks footer About Us button", () => {
    cy.visit("https://telnyx.com/company/about");
  });
  
  When("A user clicks Google Maps Amsterdam link", () => {
    aboutUsPage.locateAmsterdam();
  });
   
  Then("The user will see the description of the building", () => {});
 