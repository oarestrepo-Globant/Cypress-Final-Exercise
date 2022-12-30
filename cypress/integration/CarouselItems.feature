Feature: Carousel Navigation
    As an user
    I want to see the product carousel, and navigate with the back and forward buttons
    To view featured products

    Background:
        Given I am in the home page

    @carousel @carouselItems @regression
    Scenario: Validate carousel is present
        Then I should see an items carousel

    @carousel @carouselBack @regression @sanity
    Scenario: Navigate backwards
        When I click on the carousel back arrow
        Then I should see laptops carousel image

    @carousel @carouselForward @regression @sanity
    Scenario: Navigate forwards
        When I click on the carousel forward arrow
        Then I should see samsung nexus image