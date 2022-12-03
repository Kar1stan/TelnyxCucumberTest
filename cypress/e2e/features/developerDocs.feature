Feature: Footer DeveloperDocs page

    Feature Developer Docs page SDL setup.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Developer Docs button
    Scenario: Should clicks Development button and SDK Setup button inside of it
        When A user clicks Development button and SDK Setup buttons
        Then Panel how to integrate telnyx is visible 