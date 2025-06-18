import LoginPage from "../Pages/loginPage";
import PaymentPage from "../Pages/paymentPage.spec.js";

const loginPage = new LoginPage();
const paymentPage = new PaymentPage();

describe("Send money with sufficient balance", () => {
  it("Should send money when user has sufficient balance", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = "s3cret";
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(user.username, password);
      paymentPage.transactionFiller();
      paymentPage.validPaymentChecker();
    });
  });

  it("Should not send money when user has insufficient balance", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = "s3cret";
      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(user.username, password);
      paymentPage.overSender();
      paymentPage.validPaymentChecker();
    });
  });
});
