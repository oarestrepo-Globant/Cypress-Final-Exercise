
Feature: Headers links navigation
    As an user
    I want to navigate through the different headers links
    To view the different pages of the website

    Background:
        Given I am in the home page

    @headersLinks @contactLink @regression
    Scenario: Validate Contact link is working
        When I click on "Contact" link
        Then I should see a popup with title "New message"

    @headersLinks @aboutUsLink @regression 
    Scenario: Validate About Us link is working
        When I click on "About us" link
        Then I should see a popup with title "About us"

    @headersLinks @loginLink @regression @smoke
    Scenario: Validate Log in link is working
        When I click on "Log in" link
        Then I should see a popup with title "Log in"

    @headersLinks @signupLink @regression @smoke
    Scenario: Validate Sign up link is working
        When I click on "Sign up" link
        Then I should see a popup with title "Sign up"

    @headersLinks @homeLink @regression @smoke
    Scenario: Validate Home link is working
        When I click on "Home" link
        Then I should see home page

    @headersLinks @cartLink @regression @smoke
    Scenario: Validate Cart link is working
        When I click on "Cart" link
        Then I should see cart page