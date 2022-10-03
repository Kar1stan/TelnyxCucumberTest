Feature: Footer LogIn page

    Feature LogIn page will work depending on the user credentials.

    Background:
        Given A web browser is at the telnyx home page and clicks footer Log In button
    Scenario: Should LogIn with valid credentials
        When A user enters the email, the password and clicks on the Log in button
        | email             | password  |
        | foloxov@gmail.com | ZpPQ_q!!u#Lz6PZ |
        Then The error message confirm email error will be displayed
    Scenario: Should LogIn with invalid password
        When A user enters the email, and incorrect password, and clicks on the Log in button
        | email             | password2 |
        | foloxov@gmail.com | !!!! | 
        Then The url of the page won't change and incorrect password error message will be displayed
    Scenario: Should LogIn with empty credentials
        When A user leave all credentials empty, and clicks on the Log in button
        Then The url of the page won't change and incorrect error inputs messages will be displayed
    Scenario: Should LogIn with false company email in Single Sign-On
        When A user clicks Single Sign-On button, enters false company email "foloxov@gmail.com", and clicks on the Continue button
        Then The error message request not found will be displayed 1
    Scenario: Should LogIn with false business name in Single Sign-On
        When A user clicks Single Sign-On button, clicks company name button , enters false business name "5555", and clicks on the Continue button
        Then The error message request not found will be displayed 2