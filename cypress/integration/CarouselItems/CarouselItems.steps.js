import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";

const home = new HomePage();

Given("I am in the home page", () => {
  cy.visit("");
});

Then("I should see an items carousel", () => {
  home.carouselItemsContainer();
});

When("I click on the carousel back arrow", () => {
  home.clickBackArrowButton();
});

Then("I should see laptops carousel image", () => {
  home.checkCarouselLaptopImageIsDisplayed();
});

When("I click on the carousel forward arrow", () => {
  home.clickForwardArrowButton();
});

Then("I should see samsung nexus image", () => {
  home.checkCarouselSamsungNexusImageIsDisplayed();
});
