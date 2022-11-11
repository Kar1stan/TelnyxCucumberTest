Feature: Blog page

    Feature Blog page check Verify API and Guides & Tutorials buttons.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Blog button
    Scenario: Should check Verify API and Guides & Tutorials buttons
        When A user clicks Verify API and Guides & Tutorials buttons
        Then Verify API and Guides & Tutorials buttons will be checked