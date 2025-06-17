import SignUpPage from "../Pages/signUpPage.js";
import LoginPage from "../Pages/loginPage";

var Chance = require("chance");

var chance = new Chance();
const signUpPage = new SignUpPage();
const loginPage = new LoginPage();

describe("Register a new user", () => {
  it("It should register a new user using valid credentials", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    loginPage.accessLoginPage();
    cy.get(signUpPage.selectorsList().signUpButton).click();
    signUpPage.fillPersonalDetails();
    cy.get(signUpPage.selectorsList().username).type(username);
    cy.get(signUpPage.selectorsList().password).type("secret3");
    cy.get(signUpPage.selectorsList().submitButton).click();
    cy.get(signUpPage.selectorsList().dialogBox);
    cy.get(signUpPage.selectorsList().closeDialogButton).eq(2).click();
  });
});

describe.skip("Register a new user with incomplete data", () => {
  it("It should assert an error message when registering a new user with missing username", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    signUpPage.accessLoginPage();
    cy.get(signUpPage.selectorsList().signUpButton).click();
    cy.get(signUpPage.selectorsList().firstName).type(firstName);
    cy.get(signUpPage.selectorsList().lastName).type(lastName);
    cy.get(signUpPage.selectorsList().username).type(username);
    cy.get(signUpPage.selectorsList().username).clear();
    cy.get(signUpPage.selectorsList().password).type("secret3");
    cy.get(signUpPage.selectorsList().confirmPassword).type("secret3");
    cy.get(signUpPage.selectorsList().requiredFieldAlert);
  });
});
