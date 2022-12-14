import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import DeveloperDocsPage from "../../pages/DeveloperDocs.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Developer Docs button", () => {
    cy.visit("https://developers.telnyx.com/docs/v2?_gl=1*15edtb9*_ga*NTQ3ODA0MDc1LjE2Njc1NjYzMDU.*_ga_ZPM4K1DLND*MTY2NzY0OTM5NC40LjEuMTY2NzY1MzA2NS4wLjAuMA..",{timeout: 10_000 });
  });

  When("A user clicks Development button and SDK Setup buttons", () => {
    DeveloperDocsPage.clickDevelopmentBtn();
    DeveloperDocsPage.clickSDKSetupBtn();
  });
   
  Then("Panel how to integrate telnyx is visible", () => {
    DeveloperDocsPage.nodeBtn.should('have.attr', 'aria-selected').and('equal', 'true');
  });
