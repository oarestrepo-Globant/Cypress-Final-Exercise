const pageLocators = {
  modalContainer: ".modal-content",
  modalTitle: ".modal-title",
};

class PopUpForm {
  getModalContainer() {
    return cy.get(pageLocators.modalContainer);
  }

  getModalTitle() {
    return cy.get(pageLocators.modalTitle);
  }

  checkModalIsPresent() {
    return this.getModalContainer().should("be.visible");
  }

  checkContactTitlePopUpIsDisplayed(text) {
    return this.getModalTitle(text).should("contain", text);
  }
}
export default PopUpForm;
