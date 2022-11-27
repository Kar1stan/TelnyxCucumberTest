Feature: LogIn page

    Feature LogIn page will work depending on the user credentials.

    Background:
        Given A web browser is at the telnyx home page and clicks Log In button
    Scenario: Should LogIn with valid credentials
        When A user enters the email "foloxov@gmail.com", the password "ZpPQ_q!!u#Lz6PZ" and clicks on the Log in button
        Then The error message confirm email error will be displayed
    Scenario: Should LogIn with invalid password
        When A user enters the email "foloxov@gmail.com", and incorrect password with 4 symbols "!!!!", and clicks on the Log in button
        Then The url of the page won't change and incorrect password error message will be displayed
    Scenario: Should LogIn with empty credentials
        When A user leave all credentials empty, and clicks on the Log in button
        Then The url of the page won't change and incorrect error inputs messages will be displayed
    Scenario: Should LogIn with false company email in Single Sign-On
        When A user clicks Single Sign-On button, enters false company email without @ symbol "foloxovgmail.com", and clicks on the Continue button
        Then The url won't change and enter valid email error message will be displayed  
    Scenario: Should LogIn with false business name with 4 numbers in Single Sign-On
        When A user clicks Single Sign-On button, clicks company name button , enters false business name with 4 numbers "5555", and clicks on the Continue button
        Then The error message request not found will be displayed 
