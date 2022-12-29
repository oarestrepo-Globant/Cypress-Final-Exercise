Feature: Headers links navigation
    As an user
    I want to navigate through the different headers links
    To view the different pages of the website

    Background:
        Given I am in the home page

    Scenario: Validate contact link is working
        When I click on "Contact" link
        Then I should see a popup with title "New message"

    Scenario: Validate About Us link is working
        When I click on "About us" link
        Then I should see a popup with title "About us"

    Scenario: Validate Log in link is working
        When I click on "Log in" link
        Then I should see a popup with title "Log in" 

    Scenario: Validate Sign up link is working
        When I click on "Sign up" link
        Then I should see a popup with title "Sign up"
    
     Scenario: Validate Home link is working
        When I click on "Home" link
        Then I should see home page