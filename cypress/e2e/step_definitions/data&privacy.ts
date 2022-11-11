import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {DataPrivacyPage} from "../../pages/Data&Privacy.page";
import {MainPage} from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Data & Privacy button", () => {
    cy.visit("/");
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
  });

  When("A user scroll to Overview button and clicks page button", () => {
    const dataPrivacyPage = new DataPrivacyPage();
    dataPrivacyPage.clickDataPrivacyBtn();
    dataPrivacyPage.clickPrivacyLinkInOverviewBtn();
  });
   
  Then("A user will be redirected to the privacy policy page", () => {});