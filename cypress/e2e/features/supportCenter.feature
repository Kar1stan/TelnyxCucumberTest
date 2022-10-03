Feature: Footer Support Center page

    Feature Spport Center Refence Material header search.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Support Center button
    Scenario: Should clicks Accessible Canada Act (ACA) in the Refence Material header
        When A user clicks Reference Material header and Accessible Canada Act header
        Then The Accessible Canada Act page will be opened