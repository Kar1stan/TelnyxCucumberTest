Feature: Home page Telnyx cloud storage.

    Feature Open products storage page.

    Background:
        Given A web browser is at the telnyx home page 
    Scenario: Should open products storage page
        When A user clicks JOIN THE WAITLIST. button
        Then The products storage page will be opened
