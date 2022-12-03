Feature: Footer Support Center page

    Feature Support Center click Accessible Canada Act (ACA) headling inside of the Refence Material headling.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Support Center button
    Scenario: Should click Accessible Canada Act (ACA) headling inside of the Refence Material headling
        When A user clicks Reference Material headling then click Accessible Canada Act headling
        Then The Accessible Canada Act page will be opened