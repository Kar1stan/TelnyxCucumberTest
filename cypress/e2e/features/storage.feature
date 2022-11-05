Feature: Home page Telnyx.

    Feature Check the email form at telnyx home page.

    Background:
        Given A web browser is at the telnyx home page 
    Scenario: Should check the email form at telnyx home page
        When A user enter the email "foloxov@gmail.com" and clicks Try for free button
        Then The sign up page will be opened