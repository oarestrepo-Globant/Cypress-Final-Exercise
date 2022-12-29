const pageLocators = {
  cartPageTitle: ".col-lg-8",
  placeOrderButton: ".btn.btn-success",
};

class CartPage {
  getCartPageTitle() {
    return cy.get(pageLocators.cartPageTitle);
  }

  getPlaceHolderButton() {
    return cy.get(pageLocators.placeOrderButton);
  }

  /////////////////////////

  checkCartPageTitleIsDisplayed() {
    return this.getCartPageTitle()
      .children()
      .contains("Products")
      .should("be.visible");
  }

  checkPlaceOrderButtonIsDisplayed() {
    return this.getPlaceHolderButton().should("be.visible");
  }

  checkCartPageIsDisplayed() {
    this.checkCartPageTitleIsDisplayed();
    this.checkPlaceOrderButtonIsDisplayed();
  }
}
export default CartPage;
