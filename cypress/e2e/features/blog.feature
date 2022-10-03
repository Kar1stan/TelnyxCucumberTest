Feature: Footer Blog page

    Feature Blog page set filters by product and content.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Blog button
    Scenario: Should set filters by product and content
        When A user clicks Verify API and Guides & Tutorials buttons
        Then Verify API and Guides & Tutorials buttons will be checked