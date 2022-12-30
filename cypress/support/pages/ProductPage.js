const pageLocators = {
  productTitle: ".name",
  productPrice: ".price-container",
  productDescription: "#more-information > :nth-child(3)",
  addToCartButton: ".btn.btn-success.btn-lg",
  cartLinkButton: "#cartur",
};

class ProductPage {
  getProductTitle() {
    return cy.get(pageLocators.productTitle);
  }

  getPrice() {
    return cy.get(pageLocators.productPrice);
  }

  getDescription() {
    return cy.get(pageLocators.productDescription);
  }

  getAddToCartButton() {
    return cy.get(pageLocators.addToCartButton);
  }

  getCartLinkButton() {
    return cy.get(pageLocators.cartLinkButton);
  }

  //////////////////////

  checkProductTitleIsDiplayed() {
    return this.getProductTitle().should("have.length.at.least", 1);
  }

  checkPriceIsDisplayed() {
    return this.getPrice().should("have.length.at.least", 1);
  }

  //   checkAddCartButtonIsDisplayed() {
  //     return this.getAddToCartButton().should("be.visible");
  //   }

  clickOnAddToCartButton() {
    return this.getAddToCartButton().click();
  }

  clickCartLink() {
    return this.getCartLinkButton().click();
  }
}
export default ProductPage;
