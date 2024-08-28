describe('Testes de registro de endereços', () => {
    before(() => {
        cy.waitForBackend();
        
    });

    beforeEach(() => {
        cy.visit("");
    })

    it('Cadastrar Endereço', () => {
        const cpf = "48421427075"

        cy.addPerson(cpf)    
        cy.get('#toast-1-title').contains("Person Created")
        
        cy.visit("");

        cy.get(':nth-child(5) > [style="display: flex; align-items: center; margin-right: 15vw; width: 50%;"] > .css-3sosg9 > .chakra-button > .chakra-icon > path').click()
        cy.get('[data-cy="addAinputS"]').type("Estradinha Maneira")
        cy.get('[data-cy="addAinputNH"]').type("Vizinhança Legal")
        cy.get('[data-cy="addAinputNo"]').type("1234")
        cy.get('[data-cy="addAinputC"]')
        cy.get('[data-cy="addAinputCt"]').type("Cotia")
        cy.get('[data-cy="addAinputUF"]').type("SP")
        cy.get('[data-cy="addAinputCo"]').type("Brasil")
        cy.get('[data-cy="addAinputZip"]').type("12345570")
        cy.get('[data-cy="addARMA"]').click()
        cy.deletePerson(cpf)
    });
});