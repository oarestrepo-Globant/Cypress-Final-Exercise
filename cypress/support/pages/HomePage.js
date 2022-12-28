//page locators
var pageLocators = {
  carouselItemsContainer: '.carousel-inner',
  carouselActiveItem: ".carousel-item.active",
  backArrowButton: ".carousel-control-prev-icon",
  forwardArrowButton: ".carousel-control-next-icon",
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

  /////////////////////////////////////////////////////////////////////////

  //Implementar web service
    carouselItemsContainer() {
      return cy.get('.carousel-inner').should('be.visible');
     // return this.carouselItemsContainer().should('be.visible');
    }

  clickBackArrowButton() {
    return this.backArrowButton().click();
  }

  checkCarouselLaptopImageIsDisplayed() {
    cy.wait(1000);
  
    return (
      this.carouselActiveItem()
        .children()
        .invoke("attr", "src")
        .should("include", "iphone")
    );
  }

  clickForwardArrowButton() {
    return this.forwardArrowButton;
  }

  checkCarouselSamsungNexusImageIsDisplayed() {
    cy.wait(1000);
    return (
      this.carouselActiveItem()
        .children()
        .invoke("attr", "src")
        .should("include", "Samsung1")
    );
  }
}
export default HomePage;
