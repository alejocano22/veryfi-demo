describe('Homepage Tests', () => {
  it('Should navigate to the login page', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#login-title').contains('Welcome.');
  });

  it('Should navigate to the login page and come back to homepage', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#login-title').contains(Cypress.env('loginMessage'));
    cy.wait(2000);
    cy.get('#logo').click();
    cy.wait(2000);
    cy.url().should('include', '/');
  });

  it('Should change the language', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#main-title').contains(Cypress.env('mainTitleEn'));
    cy.wait(2000);
    cy.get('[data-cy=language-button]').click();
    cy.wait(2000);
    cy.get('#main-title').contains(Cypress.env('mainTitleEs'));
    cy.wait(2000);
    cy.get('[data-cy=language-button]').click();
    cy.wait(2000);
    cy.get('#main-title').contains(Cypress.env('mainTitleEn'));
  });
});
