class PaymentPage {
  selectorsList() {
    const selectors = {
      newTransButton: "[href='/transaction/new']",
      selectUser: "li",
      amountField: "[name='amount']",
      noteField: "[placeholder='Add a note']",
      submitPaymentButton: "[data-test='transaction-create-submit-payment']",
    };

    return selectors;
  }

  transactionFiller() {
    cy.get(this.selectorsList().newTransButton).click();
    cy.get(this.selectorsList().selectUser).eq(3).click({ force: true });
    cy.get(this.selectorsList().amountField).type("1");
    cy.get(this.selectorsList().noteField).type("Potluck dinner");
    cy.get(this.selectorsList().submitPaymentButton).click();
    return;
  }

  validPaymentChecker() {
    cy.get("[data-test='new-transaction-return-to-transactions']");
  }

  overSender() {
    cy.get(this.selectorsList().newTransButton).click();
    cy.get(this.selectorsList().selectUser).eq(3).click({ force: true });
    cy.get(this.selectorsList().amountField).type("999999999");
    cy.get(this.selectorsList().noteField).type("Potluck dinner");
    cy.get(this.selectorsList().submitPaymentButton).click();
    return;
  }
}

export default PaymentPage;
