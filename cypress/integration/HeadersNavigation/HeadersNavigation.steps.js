import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";
import PopUpForm from "../../support/pages/components/PopUpForm";
import CartPage from "../../support/pages/CartPage";

const home = new HomePage();
const popUp = new PopUpForm();
const cart = new CartPage();

Given("I am in the home page", () => {
  cy.visit("");
});

When("I click on {string} link", (clickedOption) => {
  home.clickHeadersLinks(clickedOption);
});

Then("I should see a popup with title {string}", (titleText) => {
  popUp.checkContactTitlePopUpIsDisplayed(titleText);
});

Then("I should see home page", () => {
  home.checkHomePageIsDisplayed();
});

Then("I should see cart page", () => {
  cart.checkCartPageIsDisplayed();
});
