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

  fillPersonalDetails() {
    const user = this.randomUserConstructor();
    cy.get(this.selectorsList().firstName).type(user.firstName);
    cy.get(this.selectorsList().lastName).type(user.lastName);
    cy.get(this.selectorsList().username).type(user.username);
    cy.get(this.selectorsList().password).type("secret3");
    cy.get(this.selectorsList().confirmPassword).type("secret3");
    cy.get(this.selectorsList().submitButton).click();
  }
}

export default SignUpPage;
