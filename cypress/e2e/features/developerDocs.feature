Feature: Footer DeveloperDocs page

    Feature Developer Docs page SDL setup.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Developer Docs buttons
    Scenario: Should clicks Development button and SDK Setup buttons
        When A user clicks Development button and SDK Setup buttons
        Then Panel how to integrate telnyx is visible 