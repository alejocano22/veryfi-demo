Cypress.Commands.add('login', (email, password) => {
  cy.visit(Cypress.env('apiUrl') + '/login');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
  cy.wait(10000);
});

Cypress.Commands.add('logout', () => {
  cy.get('#navbar-logout-button').click();
  cy.wait(2000);
});
