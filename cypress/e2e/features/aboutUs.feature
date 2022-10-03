Feature: Footer AboutUs page

    Feature AboutUs page Gooogle Maps search.

    Background:
        Given A web browser is at the telnyx home page and clicks footer About Us button
    Scenario: Should click Amsterdam Google Maps link 
        When A user clicks Google Maps Amsterdam link 
        Then The user will see the description of the building