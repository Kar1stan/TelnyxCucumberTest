Feature: Home page Switch + Save with Telnyx.

    Feature Configure Switch + Save with Telnyx part of the telnyx home page.

    Background:
        Given A web browser is at the telnyx home page 
    Scenario: Should switch to Toll-free numbers and No buttons
        When A user clicks No,Toll-free numbers buttons
        Then Both buttons are green