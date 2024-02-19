const page = {
  message: () => cy.get('.App__message'),
  body: () => cy.get('body'),
};

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    // if (failed) Cypress.runner.stop();

    cy.visit('/');
    page.message().should('exist');
  });

  it('should show the default message', () => {
    page.message().should('have.text', 'Nothing was pressed yet');
  });

  it('should print a correct message after pressing [Enter]', () => {
    page.body().type('{enter}');

    page.message()
      .should('have.text', 'The last pressed key is [Enter]');
  });

  it('should print a correct message after pressing [Esc]', () => {
    page.body().type('{esc}');

    page.message()
      .should('have.text', 'The last pressed key is [Escape]');
  });

  it('should print a correct message after pressing a digit', () => {
    page.body().type('1');

    page.message()
      .should('have.text', 'The last pressed key is [1]');
  });

  it('should print a correct message after pressing a letter', () => {
    page.body().type('a');

    page.message()
      .should('have.text', 'The last pressed key is [a]');
  });
});
