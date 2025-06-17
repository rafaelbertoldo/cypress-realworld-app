import MyInfoPage from "../Pages/myInfoPage.js";

var Chance = require("chance");

var chance = new Chance();
const myInfoPage = new MyInfoPage();

describe("Register a new user", () => {
  it("It should register a new user using valid credentials", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    cy.visit("http://localhost:3000/signin");
    cy.get(myInfoPage.selectorsList().signUpButton).click();
    cy.get(myInfoPage.selectorsList().firstName).type(firstName);
    cy.get(myInfoPage.selectorsList().lastName).type(lastName);
    cy.get(myInfoPage.selectorsList().username).type(username);
    cy.get(myInfoPage.selectorsList().password).type("secret3");
    cy.get(myInfoPage.selectorsList().confirmPassword).type("secret3");
    cy.get(myInfoPage.selectorsList().submitButton).click();
    cy.get(myInfoPage.selectorsList().username).type(username);
    cy.get(myInfoPage.selectorsList().password).type("secret3");
    cy.get(myInfoPage.selectorsList().submitButton).click();
    cy.get(myInfoPage.selectorsList().dialogBox);
    cy.get(myInfoPage.selectorsList().closeDialogButton).eq(2).click();
  });
});

describe("Register a new user with incomplete data", () => {
  it("It should assert an error message when registering a new user with missing username", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    cy.visit("http://localhost:3000/signin");
    cy.get(myInfoPage.selectorsList().signUpButton).click();
    cy.get(myInfoPage.selectorsList().firstName).type(firstName);
    cy.get(myInfoPage.selectorsList().lastName).type(lastName);
    cy.get(myInfoPage.selectorsList().username).type(username);
    cy.get(myInfoPage.selectorsList().username).clear();
    cy.get(myInfoPage.selectorsList().password).type("secret3");
    cy.get(myInfoPage.selectorsList().confirmPassword).type("secret3");
    cy.get(myInfoPage.selectorsList().requiredFieldAlert);
  });
});
