const pageLocators = {
  cartPageTitle: ".col-lg-8",
  placeOrderButton: ".btn.btn-success",
  addedProduct: ".success",
  deleteButton: "td:nth-of-type(4) > [href='#']",
  placeOrderButton: ".btn.btn-success",
  purchaseModal: "#orderModal >",

  nameInput: "#name",
  countryInput: "#country",
  cityInput: "#city",
  cardInput: "#card",
  monthInput: "#month",
  yearInput: "#year",
  purchaseButton: ".btn-primary",
  purchaseButtonText: "Purchase",
  sweetAlert: ".sweet-alert.showSweetAlert.visible",
  okPurchaseButton: ".confirm.btn.btn-lg.btn-primary",
};

class CartPage {
  getCartPageTitle() {
    return cy.get(pageLocators.cartPageTitle);
  }

  getPlaceOrderButton() {
    return cy.get(pageLocators.placeOrderButton);
  }

  getAddedProduct() {
    return cy.get(pageLocators.addedProduct);
  }

  getDeleteButtonFromProduct() {
    return cy.contains("Delete");
  }

  getPlaceOrderButton() {
    return cy.get(pageLocators.placeOrderButton);
  }

  getPurchaseModal() {
    return cy.get(pageLocators.purchaseModal);
  }

  getNameInput() {
    return cy.get(pageLocators.nameInput);
  }

  getCountryInput() {
    return cy.get(pageLocators.countryInput);
  }

  getCityInput() {
    return cy.get(pageLocators.cityInput);
  }

  getCardInput() {
    return cy.get(pageLocators.cardInput);
  }

  getMonthInput() {
    return cy.get(pageLocators.monthInput);
  }

  getYearInput() {
    return cy.get(pageLocators.yearInput);
  }

  purchaseButton() {
    return cy.contains(
      pageLocators.purchaseButton,
      pageLocators.purchaseButtonText
    );
  }

  getSweetAlert() {
    return cy.get(pageLocators.sweetAlert);
  }

  getOkPurchaseButton() {
    return cy.get(pageLocators.okPurchaseButton);
  }

  checkCartPageTitleIsDisplayed() {
    return this.getCartPageTitle()
      .children()
      .contains("Products")
      .should("be.visible");
  }

  checkPlaceOrderButtonIsDisplayed() {
    return this.getPlaceOrderButton().should("be.visible");
  }

  checkCartPageIsDisplayed() {
    this.checkCartPageTitleIsDisplayed();
    this.checkPlaceOrderButtonIsDisplayed();
  }

  checkProductAddedSuccessfullyToCart() {
    return this.getAddedProduct().should("be.visible");
  }

  clickDeleteProduct() {
    return this.getDeleteButtonFromProduct().click();
  }

  checkProductWasRemoved() {
    return this.getAddedProduct().should("not.exist");
  }

  clickPlaceOrderButton() {
    return this.getPlaceOrderButton().click();
  }

  checkModalIsPresent() {
    return this.getPurchaseModal().should("be.visible");
  }

  enterNameInput(data) {
    return this.getNameInput().invoke("val", data);
  }

  enterCountryInput(data) {
    return this.getCountryInput().invoke("val", data);
  }

  enterCityInput(data) {
    return this.getCityInput().invoke("val", data);
  }

  enterCardInput(data) {
    return this.getCardInput().invoke("val", data);
  }

  enterYearInput(data) {
    return this.getYearInput().invoke("val", data);
  }

  enterMonthInput(data) {
    return this.getMonthInput().invoke("val", data);
  }

  clickOnPurchaseButton() {
    this.purchaseButton().click();
  }

  clickSweetAlert() {
    return this.getSweetAlert().click();
  }

  clickOkPurchaseButton() {
    return this.getOkPurchaseButton().click();
  }

  fillThePurchaseForm() {
    cy.fixture("buyProductFormInfo").then((buyProductFormInfo) => {
      this.enterNameInput(buyProductFormInfo.name);
      this.enterCountryInput(buyProductFormInfo.country);
      this.enterCityInput(buyProductFormInfo.city);
      this.enterCardInput(buyProductFormInfo.card);
      this.enterMonthInput(buyProductFormInfo.month);
      this.enterYearInput(buyProductFormInfo.year);

      this.clickOnPurchaseButton();
      this.clickSweetAlert();
      this.clickOkPurchaseButton();
    });
  }
}
export default CartPage;
