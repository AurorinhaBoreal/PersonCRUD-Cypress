describe('Testes de carregamento da página', () => {

    before(() => {
        cy.waitForBackend();
    });
    
    beforeEach(() => {
        cy.visit("");
    })

    it('Verifica se Header Icons carregaram', () => {
        cy.get('._headerIcons_8e5wj_42')
    });

    it('Verifica se apresentação carrega corretamente', () => {
        cy.get('._presentationContainer_100p1_1') // Verifica Container
        cy.get('._presentationLogo_100p1_22') // Verifica Logo
        cy.get('._presentationTitle_100p1_27').contains("Person CRUD") // Verifica Title
        cy.get('._presentationSlogan_100p1_34').contains("Virtual persons still look like real ones") // Verifica Slogan
    });

    it('Verifica se Person Header carrega corretamente', () => {
        cy.get('._pHeaderContainer_1v21k_1') // Verifica Container
        cy.get('._pHeaderContainer_1v21k_1 > .chakra-text').contains("Person List") // Verifica Title
        cy.get('.css-1bb86fe') // Verifica Add Button
    });
});