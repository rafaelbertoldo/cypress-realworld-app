describe("Successful login", () => {
  it("It should login with valid credentials", () => {
    cy.fixture("database.json").then((database) => {
      const user = database.users[0];
      const password = 's3cret';
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type(user.username);
      cy.get("[name='password']").type(password);
      cy.get("[type='submit']").click();
    });
  });
});
