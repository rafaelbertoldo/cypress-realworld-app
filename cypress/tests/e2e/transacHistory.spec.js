import { sign } from "crypto";
import LoginPage from "../Pages/loginPage";
import SignUpPage from "../Pages/signUpPage";

const loginPage = new LoginPage();
const signUpPage = new SignUpPage();

describe("Transaction history tests", () => {
  it("Should correctly display an user transaction history", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = "s3cret";
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(user.username, password);
      cy.get("[href='/personal']").click();
      cy.get("[data-testid='ThumbUpAltOutlinedIcon']");
    });
  });
  it("Should assert an error message indicating that user does dot have any previous transactions", () => {
    loginPage.accessLoginPage();
    signUpPage.registerRandomUser();
    signUpPage.registerChecker();
    signUpPage.bankAccountCreator();
    signUpPage.newProfileTransactionsChecker();
  });
});
