describe('Homepage Tests', () => {
  it('Should login', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#email')
      .type(Cypress.env('testEmail'), { delay: 100 })
      .should('have.value', Cypress.env('testEmail'));
    cy.get('#password')
      .type(Cypress.env('testPassword'), { delay: 100 })
      .should('have.value', Cypress.env('testPassword'));
    cy.get('#login-button').click();
    cy.wait(10000);
    cy.url().should('include', '/dashboard');
  });

  it('Should not login and show a error message', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#email')
      .type(Cypress.env('testEmail'), { delay: 100 })
      .should('have.value', Cypress.env('testEmail'));
    cy.get('#password')
      .type(`${Cypress.env('testPassword') + '*'}`, { delay: 100 })
      .should('have.value', `${Cypress.env('testPassword') + '*'}`);
    cy.get('#login-button').click();
    cy.wait(10000);
    cy.get('#login-error-message').contains(Cypress.env('loginErrorMessage'));
  });

  it('Should show and hide password', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#password')
      .type(`${Cypress.env('testPassword') + 1}`, { delay: 100 })
      .should('have.value', `${Cypress.env('testPassword') + 1}`);
    cy.get('#password-eye').click();
    cy.get('#password').should('have.attr', 'type').and('equal', 'text');
    cy.wait(2000);
    cy.get('#password-eye-off').click();
    cy.wait(2000);
    cy.get('#password').should('have.attr', 'type').and('equal', 'password');
  });

  it('Should logout', () => {
    cy.visit(Cypress.env('apiUrl'));
    cy.wait(2000);
    cy.get('#navbar-login-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
    cy.get('#email')
      .type(Cypress.env('testEmail'), { delay: 100 })
      .should('have.value', Cypress.env('testEmail'));
    cy.get('#password')
      .type(Cypress.env('testPassword'), { delay: 100 })
      .should('have.value', Cypress.env('testPassword'));
    cy.get('#login-button').click();
    cy.wait(10000);
    cy.url().should('include', '/dashboard');
    cy.wait(2000);
    cy.get('#navbar-logout-button').click();
    cy.wait(2000);
    cy.url().should('include', '/login');
  });
});
