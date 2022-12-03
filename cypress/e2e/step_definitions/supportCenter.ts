import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import SupportCenterPage from "../../pages/SupportCenter.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Support Center button", () => {
    cy.visit("https://support.telnyx.com/en/");
  });

  When("A user clicks Reference Material headling then click Accessible Canada Act headling", () => { 
    SupportCenterPage.clickHeadlingReferenceMaterial();
    SupportCenterPage.clickSpanAccessibleCanadaAct();
  });
  
  Then("The Accessible Canada Act page will be opened", () => {
    cy.url().should('include','/6228388-accessible-canada-act-aca-feedback-process-description');
  });
