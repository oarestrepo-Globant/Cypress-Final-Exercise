Feature: Buy products process
    As an user
    I want to be able to choose the products I like
    So I can buy them

    Background:
        Given I am in the home page

    @product @categoriesSelection @product @smoke @regression
    Scenario: Validate category selection navigation
        When I click on Categories link
        Then I should see a list of 9 products through API response

    @product @categoriesSelection @phones @smoke @regression
    Scenario: Validate phones section navigation
        When I click on Phones link
        Then I should see a list of minimun 1 product

    @product @categoriesSelection @monitors @smoke @regression
    Scenario: Validate monitors section navigation
        When I click on monitors link
        Then I should see a list of minimun 1 product

    @product @categoriesSelection @laptops @smoke @regression
    Scenario: Validate laptops section navigation
        When I click on laptops link
        Then I should see a list of minimun 1 product

    @product @productSelection @addProduct @smoke @regression
    Scenario: Validate add to cart
        When I click on any product
        Then I should see the product page
        But I click Add to cart
        Then I can see the product added to cart

    @product @productSelection @removeProduct @smoke @regression
    Scenario: Validate remove product from cart
        Given I am in the cart page with products on it
        When I click on delete button from a product
        Then I can see the product was removed

    @product @productSelection @buyProduct @smoke @regression
    Scenario: Validate buying product process
        Given I am in the cart page with products on it
        When I click place order button
        Then I should see the purchase form
        But I submit the form correctly
        Then I should see home page