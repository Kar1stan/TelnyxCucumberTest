Feature: SignUp page

    Feature SignUp page will work depending on the user credentials.

    Background:
        Given A web browser is at the telnyx home page and clicks Sign Up button
    Scenario: Should SigUp with valid credentials
        When A user enters the email "vyter24@gmail.com",the fullname "BedminMer",the password "%P*gg.8f2wh*56k",clicks Terms and Conditions checkbox and clicks on the Create Account button
        Then The user will be on the verify email page
    Scenario: Should SigUp with invalid password
        When A user enters incorrect password "dfffg1QzBBBqq", and clicks on the Create Account button
        Then The user must be on the Sign Up page 1
    Scenario: Should SigUp with empty credentials
        When A user leave all credentials empty, and clicks on the Create Account button
        Then The user must be on the Sign Up page 2
    Scenario: Should click Log In button at Sign Up page
        When A user clicks Log In button
        Then The user must be on the Log In page