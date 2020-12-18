
@all
Feature: Sort and select the items and checkout
    Background:
        Given I have logged in as a Standard user

    Scenario: Sort and select the items and checkout
        When in the landing page sort the products by Price high to low
            And The cheapest & the 2nd costliest products to your basket
            And click on basket and checkout
        Then Enter details and Finish the purchase

