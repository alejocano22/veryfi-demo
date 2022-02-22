describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('testEmail'), Cypress.env('testPassword'));
  });

  it('Should change the language', () => {
    cy.wait(2000);
    cy.get('[data-cy=language-button]').click();
    cy.wait(2000);
    cy.get('#tab-0').contains(Cypress.env('categoriesLabelEs'));
    cy.wait(2000);
    cy.get('[data-cy=language-button]').click();
    cy.wait(2000);
    cy.get('#tab-0').contains(Cypress.env('categoriesLabelEn'));
  });

  it('Should change charts', () => {
    cy.wait(2000);
    cy.get('#tab-1').click().contains(Cypress.env('tagsLabelEn'));
    cy.wait(2000);
    cy.get('#tab-2').click().contains(Cypress.env('projectsLabelEn'));
    cy.wait(2000);
    cy.get('#tab-0').click().contains(Cypress.env('categoriesLabelEn'));
    cy.wait(2000);
  });

  it('Should be redirect to login if not authenticated', () => {
    cy.logout();
    cy.wait(2000);
    cy.visit(Cypress.env('apiUrl') + '/dashboard');
    cy.wait(2000);
    cy.url().should('include', '/login');
  });
});
