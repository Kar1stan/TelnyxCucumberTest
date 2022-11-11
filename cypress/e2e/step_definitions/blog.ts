import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import {BlogPage} from "../../pages/Blog.page";
import {MainPage} from "../../pages/MainPage.page"
  
  Given("A web browser is at the telnyx home page and clicks footer Blog button", () => {
    cy.visit("/");
    const mainPage = new MainPage();
    mainPage.clickAcceptCookiesBtn();
  });

  When("A user clicks Verify API and Guides & Tutorials buttons", () => {
    const blogPage = new BlogPage();
    blogPage.clickBlogBtn();
    blogPage.clickVerifyAPIBtnAndGuidesTutorialsBtn();
  });

  Then("Verify API and Guides & Tutorials buttons will be checked", () => {
    const blogPage = new BlogPage();
    blogPage.verifyAPIBtn().should('have.attr', 'aria-checked').and('equal', 'true');
    blogPage.guidesTutorialsBtn().should('have.attr', 'aria-checked').and('equal', 'true');
  });