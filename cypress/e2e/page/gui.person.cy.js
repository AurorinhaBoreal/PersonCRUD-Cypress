describe('Testes de carregamento das pessoas', () => {

    beforeEach(() => {
        cy.visit("");
    })

    it('Verifica Person Avatar', () => {
        cy.get('.chakra-avatar__img')
    });

    it('Verifica Info Principal', () => {
        cy.get('._nameText_1jcr4_23').contains("Ana") // Nome
        cy.get('._ageText_1jcr4_27').contains("24") // Idade
        cy.get('._surnameText_1jcr4_33').contains("Mariana") // Sobrenome
        cy.get('._cpfText_1jcr4_33').contains("766.291.000-85") // CPF
    });

    it('Verifica Address', () => {
        cy.get('._pinIcon_1jcr4_49') // Pin Icon
        cy.get('._topInfo_1jcr4_17') // Estrada e Número
        cy.get('._bottomInfo_1jcr4_17') // Outros
    });
});

describe('Verifica Funcionalidade de Person Modal', () => {

    beforeEach(() => {
        cy.visit("");
        cy.get(':nth-child(1) > [style="display: flex; align-items: center; margin-right: 15vw; width: 50%;"] > :nth-child(4) > .chakra-button').click()
    })

    it('Verifica Avatar', () => {
        cy.get('._personAvatar_19rrl_1')
    });
    it('Verifica Info Principal', () => {
        cy.get('._personName_19rrl_18') // Nome e Idade
        cy.get('._personDetails_19rrl_22') // Nascimento e CPF
    });

    it('Verifica Main Address', () => {
        cy.get('._mainHeader_19rrl_35 > .chakra-text') // Titulo
        cy.get('._personDetails_19rrl_22') // Rua
        cy.get('._mainBody_19rrl_48 > :nth-child(1) > :nth-child(4)') // Bairro
        cy.get('._mainBody_19rrl_48 > :nth-child(1) > :nth-child(6)') // Número
        cy.get('._mainBody_19rrl_48 > :nth-child(1) > :nth-child(6)') // Cidade
        cy.get('._mainBody_19rrl_48 > :nth-child(1) > :nth-child(6)') // Estado
        cy.get('._mainBody_19rrl_48 > :nth-child(1) > :nth-child(6)') // País
        cy.get('._mainBody_19rrl_48 > :nth-child(3) > :nth-child(4)') // ZipCode
    });

    it('Verifica Secondary Address', () => {
        cy.get('._secondaryHeader_19rrl_35 > .chakra-text') // Titulo
        cy.get('._secondaryHeader_19rrl_35 > .chakra-text') // Descrição
    })

    it('Verifica Fechamento', () => {
        cy.get('.chakra-modal__close-btn').click()
    })
});