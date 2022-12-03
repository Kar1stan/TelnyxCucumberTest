import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import BlogPage from "../../pages/Blog.page";
import MainPage from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Blog button", () => {
    cy.visit("/");
    MainPage.clickAcceptCookiesBtn();
  });


  When("A user clicks Verify API and Guides & Tutorials buttons", () => {
    BlogPage.clickBlogBtn();
    BlogPage.clickVerifyAPIBtn();
    BlogPage.clickGuidesAndTutorialsBtn();
  });

  Then("Verify API and Guides & Tutorials buttons will be checked", () => {
    BlogPage.verifyAPIBtn.should('have.attr', 'aria-checked').and('equal', 'true');
    BlogPage.guidesTutorialsBtn.should('have.attr', 'aria-checked').and('equal', 'true');
  });