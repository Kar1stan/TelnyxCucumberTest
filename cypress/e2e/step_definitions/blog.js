import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const blogPage = require("../../pages/Blog.page");
  
  Given("A web browser is at the telnyx home page and clicks footer Blog button", () => {
    cy.visit("https://telnyx.com/resources");
  });

  When("A user clicks Verify API and Guides & Tutorials buttons", () => {
    blogPage.setBlogFilterhByProductAndContent();
  });

  Then("Verify API and Guides & Tutorials buttons will be checked", () => {
    blogPage.elements.verifyAPIBtn().should('have.attr', 'aria-checked').and('equal', 'true');
    blogPage.elements.guidesTutorialsBtn().should('have.attr', 'aria-checked').and('equal', 'true');
  });