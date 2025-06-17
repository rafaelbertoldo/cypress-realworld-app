class LoginPage {
  selectorsList() {
    const selectors = {
      signUpButton: "[href='/signup']",
      username: "[name='username']",
      password: "[name='password']",
      submitButton: "[type='submit']",
      dialogBox: "[role='dialog']",
      closeDialogButton: "[type='button']",
      requiredFieldAlert: "#username-helper-text",
      myContactsButton: "[href='/contacts']",
      invalidCredentialsAlert: "[role='alert']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("http://localhost:3000/signin");
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().username).type(username);
    cy.get(this.selectorsList().password).type(password);
    cy.get(this.selectorsList().submitButton).click();
  }
}

export default LoginPage;
