var Chance = require("chance");

var chance = new Chance();

class SignUpPage {
  selectorsList() {
    const selectors = {
      signUpButton: "[href='/signup']",
      firstName: "[name='firstName']",
      lastName: "[name='lastName']",
      username: "[name='username']",
      password: "[name='password']",
      confirmPassword: "[name='confirmPassword']",
      submitButton: "[type='submit']",
      dialogBox: "[role='dialog']",
      closeDialogButton: "[type='button']",
      requiredFieldAlert: "#username-helper-text",
      bankNameField: "[name='bankName']",
      routingNumber: "[name='routingNumber']",
      accountNumber: "[name='accountNumber']",
      userOnboardingButton: "[data-test='user-onboarding-next']",
      myTransactionsButton: "[href='/personal']",
      emptyTransactionsButton: "[data-test='transaction-list-empty-create-transaction-button']",
    };

    return selectors;
  }

  randomUserConstructor() {
    return {
      firstName: chance.first(),
      lastName: chance.last(),
      username: chance.word(),
    };
  }

  registerRandomUser() {
    const user = this.randomUserConstructor();
    cy.get(this.selectorsList().signUpButton).click();
    cy.get(this.selectorsList().firstName).type(user.firstName);
    cy.get(this.selectorsList().lastName).type(user.lastName);
    cy.get(this.selectorsList().username).type(user.username);
    cy.get(this.selectorsList().password).type("secret3");
    cy.get(this.selectorsList().confirmPassword).type("secret3");
    cy.get(this.selectorsList().submitButton).click();

    cy.get(this.selectorsList().username).type(user.username);
    cy.get(this.selectorsList().password).type("secret3");
    cy.get(this.selectorsList().submitButton).click();
  }
  registerInvalidUser() {
    const user = this.randomUserConstructor();
    cy.get(this.selectorsList().signUpButton).click();
    cy.get(this.selectorsList().firstName).type(user.firstName);
    cy.get(this.selectorsList().lastName).type(user.lastName);
    cy.get(this.selectorsList().username).type(user.username);
    cy.get(this.selectorsList().password).type("secret3");
    cy.get(this.selectorsList().confirmPassword).type("secret3");
    cy.get(this.selectorsList().username).clear();
    cy.get(this.selectorsList().requiredFieldAlert);
  }

  registerChecker() {
    cy.get(this.selectorsList().dialogBox);
    cy.get(this.selectorsList().closeDialogButton).eq(2).click();
  }

  bankAccountCreator() {
    const bankName = chance.word({ length: 6 });
    const routingNumber = chance.ssn({ dashes: false });
    const accountNumber = chance.zip({ plusfour: true });
    cy.get(this.selectorsList().bankNameField).type(bankName);
    cy.get(this.selectorsList().routingNumber).type(routingNumber);
    cy.get(this.selectorsList().accountNumber).type(accountNumber);
    cy.get(this.selectorsList().submitButton).click();
    cy.get(this.selectorsList().userOnboardingButton).click();
  }

  newProfileTransactionsChecker() {
    cy.get(this.selectorsList().myTransactionsButton).click();
    cy.get(this.selectorsList().emptyTransactionsButton);
  }
}

export default SignUpPage;
