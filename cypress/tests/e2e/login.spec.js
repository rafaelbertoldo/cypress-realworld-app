var Chance = require("chance");

var chance = new Chance();

describe("Successful login", () => {
  it("It should login with valid credentials", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = "s3cret";
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type(user.username);
      cy.get("[name='password']").type(password);
      cy.get("[type='submit']").click();
    });
  });
});

describe("Trying to login with invalid credentials", () => {
  it("It should assert an error message", () => {
    cy.fixture("database.json").then((database) => {
      const user = "Mike_Edwards";
      const password = "s3cret_app";
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type(user);
      cy.get("[name='password']").type(password);
      cy.get("[type='submit']").click();
      cy.get("[role='alert']");
    });
  });
});

describe.skip("Register a new user", () => {
  it("It should register a new user using valid credentials", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type(firstName);
    cy.get("[name='lastName']").type(lastName);
    cy.get("[name='username']").type(username);
    cy.get("[name='password']").type("secret3");
    cy.get("[name='confirmPassword']").type("secret3");
    cy.get("[type='submit']").click();
    cy.get("[name='username']").type(username);
    cy.get("[name='password']").type("secret3");
    cy.get("[type='submit']").click();
    cy.get("[role='dialog']");
    cy.get("[type='button']").eq(2).click();
  });
});

describe("Register a new user with incomplete data", () => {
  it("It should assert an error message when registering a new user with missing username", () => {
    const firstName = chance.first();
    const lastName = chance.last();
    const username = chance.word();
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type(firstName);
    cy.get("[name='lastName']").type(lastName);
    cy.get("[name='username']").type(username);
    cy.get("[name='username']").clear();
    cy.get("[name='password']").type("secret3");
    cy.get("[name='confirmPassword']").type("secret3");
    cy.get("#username-helper-text");
  });
});
