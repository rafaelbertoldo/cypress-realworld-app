import LoginPage from "../Pages/loginPage";

var Chance = require("chance");

var chance = new Chance();
const loginPage = new LoginPage();

describe("Successful login", () => {
  it("It should login with valid credentials", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = "s3cret";
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(user.username, password);
      cy.get(loginPage.selectorsList().myContactsButton);
    });
  });
});

describe("Trying to login with invalid credentials", () => {
  it("It should assert an error message", () => {
    cy.fixture("database.json").then((database) => {
      const user = chance.word({ length: 5 });
      const password = chance.word({ length: 6 });
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(user, password);
      cy.get(loginPage.selectorsList().invalidCredentialsAlert);
    });
  });
});
