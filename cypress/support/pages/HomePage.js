//page locators
import endPoints from "../../fixtures/endPoints.json";
const pageLocators = {
  carouselItemsContainer: ".carousel-inner",
  carouselActiveItem: ".carousel-item.active",
  backArrowButton: ".carousel-control-prev-icon",
  forwardArrowButton: ".carousel-control-next-icon",

  headersLinks: ".nav-item",

  categoriesLink: "#cat",
  productsCardsList: "#tbodyid > div",
  phonesLink: ".list-group :nth-child(2)",
  monitorsLink: ".list-group :nth-child(3)",
  laptopsLink: ".list-group :nth-child(4)",
  randomProductLink: "#tbodyid > div:nth-of-type(1) .hrefch",
};

class HomePage {
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

  getCategoriesLink() {
    return cy.get(pageLocators.categoriesLink);
  }

  getProductsCardsList() {
    return cy.get(pageLocators.productsCardsList);
  }

  getPhonesSectionLink() {
    return cy.get(pageLocators.phonesSectionLink);
  }

  getPhonesLink() {
    return cy.get(pageLocators.phonesLink);
  }

  getMonitorsLink() {
    return cy.get(pageLocators.monitorsLink);
  }

  getLaptopsLink() {
    return cy.get(pageLocators.laptopsLink);
  }

  getRandomProductLink() {
    let min = Math.ceil(1);
    let max = Math.floor(9);

    const index = Math.floor(Math.random() * (max - min + 1) + min);
    return cy.get(`#tbodyid > div:nth-of-type(${index}) .hrefch`);
  }

  carouselItemsContainer() {
    return cy.get(".carousel-inner").should("be.visible");
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

  clickOnCategoriesLink() {
    return this.getCategoriesLink().click();
  }

  clickOnPhonesLink() {
    return this.getPhonesLink().click();
  }

  clickOnMonitorsLink() {
    return this.getMonitorsLink.click();
  }

  clickOnLaptopsLink() {
    return this.getLaptopsLink().click();
  }

  clickOnRandomProductLink() {
    return this.getRandomProductLink().click();
  }

  checkProductsCardsListLength(productsAmountDisplayed) {
    return cy
      .request(endPoints.entries)
      .as("showedProducts")
      .then((res) => {
        return res.body.Items;
      })
      .should("have.length", productsAmountDisplayed);
  }

  checkAtLeastOneProductIsDisplayed(productsAmountDisplayed) {
    return cy
      .request(endPoints.entries)
      .as("showedProducts")
      .then((res) => {
        return res.body.Items;
      })
      .should("have.length.at.least", productsAmountDisplayed);
  }
}
export default HomePage;
