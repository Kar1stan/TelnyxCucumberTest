import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import AboutUsPage from "../../pages/AboutUs.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer About Us button", () => {
    cy.visit("/");
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
  });
  
  When("A user scroll to the Google Maps Amsterdam link clicks it", () => {
    const aboutUsPage = new AboutUsPage();
    aboutUsPage.clickAboutUsBtn();
    aboutUsPage.locateAmsterdam();
  });
   
  Then("The user will see the description of the street", () => {});
 
