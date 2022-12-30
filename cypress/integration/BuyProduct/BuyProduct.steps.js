import { Given, When, Then, But } from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../support/pages/CartPage";
import FlowsPage from "../../support/pages/FlowsPage";
import HomePage from "../../support/pages/HomePage";
import ProductPage from "../../support/pages/ProductPage";

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();
const flow = new FlowsPage();

Given("I am in the home page", () => {
  cy.visit("");
});

When("I click on Categories link", () => {
  home.clickOnCategoriesLink();
});

Then("I should see a list of {int} products", (amount) => {
  home.checkProductsCardsListLength(amount);
});

When("I click on Phones link", () => {
  home.clickOnPhonesLink();
});

When("I click on monitors link", () => {
  home.getMonitorsLink();
});

When("I click on laptops link", () => {
  home.getLaptopsLink();
});

Then("I should see a list of minimun {int} product", (amount) => {
  home.checkProductsCardsListLength(amount);
});

When("I click on any product", () => {
  home.clickOnRandomProductLink();
});

Then("I should see the product page", () => {
  product.checkProductTitleIsDiplayed();
  product.checkPriceIsDisplayed();
});

When("I click Add to cart", () => {
  product.clickOnAddToCartButton();
});

Then("I can see the product added to cart", () => {
  product.clickCartLink();
  cart.checkProductAddedSuccessfullyToCart();
});

Given("I am in the cart page with products on it", () => {
  flow.addingProductToCart();
  product.clickCartLink();
});

When("I click on delete button from a product", () => {
  cart.clickDeleteProduct();
});

Then("I can see the product was removed", () => {
  cart.checkProductWasRemoved();
});

Given("I am in the cart page with products on it", () => {
  flow.addingProductToCart();
});

When("I click place order button", () => {
  cart.clickPlaceOrderButton();
});

Then("I should see the purchase form", () => {
  cart.checkModalIsPresent();
});

But("I submit the form correctly", () => {
  cart.fillThePurchaseForm();
});

Then("I should see home page", () => {
  home.checkHomePageIsDisplayed();
});
