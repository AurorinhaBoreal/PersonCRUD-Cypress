describe('Testes de registro de pessoas', () => {

    before(() => {
        cy.waitForBackend();
        
    });

    beforeEach(() => {
        cy.visit("");
    })

    it('Cadastrar Pessoa', () => {
        const cpf = "48421427075"

        cy.get('[data-cy="add-person"]').click()
        cy.get('._optionsWrapper_2lkmp_24 > [src="/assets/avatar6-BHabrzW3.png"]').click()

        cy.get('[data-cy="addPinputFN"]').type("Roberto")
        cy.get('[data-cy="addPinputLN"]').type("Pereira")
        cy.get('[data-cy="addPinputCPF"]').type(cpf)
        cy.get('[data-cy="addPinputBF"]').type("1999-12-31")
        cy.get('[data-cy="addPB"]').click()

        cy.get('#toast-1-title').contains("Person Created")
        
        cy.deletePerson(cpf)
    });
});