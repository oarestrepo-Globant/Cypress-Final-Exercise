import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the TODO homepage", () => {
  cy.visit("");
});