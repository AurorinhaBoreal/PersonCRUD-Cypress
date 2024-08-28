const { url } = require("inspector");

Cypress.Commands.add('waitForBackend', () => {
    cy.log('Waiting for backend to be ready');

    cy.request({
      url: 'https://personcrud-backend.onrender.com/person',
      failOnStatusCode: false,
      timeout: 130000
    }).then((response) => {
      if (response.status !== 200) {
        cy.wait(130000);
        cy.waitForBackend();
      }
    });
});

Cypress.Commands.add('addPerson', (cpf) => {
  cy.get('[data-cy="add-person"]').click()

  cy.wait(1000)
  cy.get('._optionsWrapper_2lkmp_24 > [src="/assets/avatar6-BHabrzW3.png"]').click()

  cy.get('[data-cy="addPinputFN"]').type("Roberto")
  cy.get('[data-cy="addPinputLN"]').type("Pereira")
  cy.get('[data-cy="addPinputCPF"]').type(cpf)
  cy.get('[data-cy="addPinputBF"]').type("1999-12-31")
  cy.get('[data-cy="addPB"]').click()

  cy.get('.chakra-modal__close-btn').click()
})

Cypress.Commands.add('deletePerson', (cpf) => {
  cy.request('DELETE', `https://personcrud-backend.onrender.com/person/delete/${cpf}`)
})