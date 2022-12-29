//page locators
const pageLocators = {
  //test1
  carouselItemsContainer: ".carousel-inner",
  carouselActiveItem: ".carousel-item.active",
  backArrowButton: ".carousel-control-prev-icon",
  forwardArrowButton: ".carousel-control-next-icon",

  //test2
  //navbarExample: "#navbarExample",
  headersLinks: ".nav-item",
};

class HomePage {
  /// instanciar Web Elements
  carouselItemsContainer() {
    return cy.wrap(pageLocators.carouselItemsContainer);
  }

  backArrowButton() {
    return cy.get(pageLocators.backArrowButton);
  }

  forwardArrowButton() {
    return cy.get(pageLocators.forwardArrowButton);
  }

  carouselActiveItem() {
    return cy.get(pageLocators.carouselActiveItem);
  }

  navbarExample() {
    return cy.get(pageLocators.navbarExample);
  }

  getHeadersLinks(option) {
    return cy.get(pageLocators.headersLinks).contains(option);
  }
  /////////////////////////////////////////////////////////////////////////

  //Implementar web service
  carouselItemsContainer() {
    return cy.get(".carousel-inner").should("be.visible");
    // return this.carouselItemsContainer().should('be.visible');
  }

  clickBackArrowButton() {
    return this.backArrowButton().click();
  }

  checkCarouselLaptopImageIsDisplayed() {
    cy.wait(1000);
    return this.carouselActiveItem()
      .children()
      .invoke("attr", "src")
      .should("include", "iphone");
  }

  clickForwardArrowButton() {
    return this.forwardArrowButton;
  }

  checkCarouselSamsungNexusImageIsDisplayed() {
    cy.wait(1000);
    return this.carouselActiveItem()
      .children()
      .invoke("attr", "src")
      .should("include", "Samsung1");
  }

  clickHeadersLinks(option) {
    return this.getHeadersLinks(option).click();
  }

  checkHomePageIsDisplayed() {
    return this.carouselItemsContainer().should("be.visible");
  }
}
export default HomePage;
