import SignUpPage from "../Pages/signUpPage.js";
import LoginPage from "../Pages/loginPage";

const signUpPage = new SignUpPage();
const loginPage = new LoginPage();

describe("Register a new user", () => {
  it("It should register a new user using valid credentials", () => {
    loginPage.accessLoginPage();
    signUpPage.registerRandomUser();
    signUpPage.registerChecker();
  });
});

describe("Register a new user with incomplete data", () => {
  it("It should assert an error message when registering a new user with missing username", () => {
    loginPage.accessLoginPage();
    signUpPage.registerInvalidUser();
  });
});
