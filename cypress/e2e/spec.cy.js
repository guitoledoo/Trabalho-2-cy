describe('Teste de cadastro', () => {
    it('Testar o formulário', () => {
      cy.visit('http://127.0.0.1:5500/TrabalhoCy/cypress/index.html');
  
      cy.get('#nome').should('be.visible');
      cy.get('#nome').type('João Silva');
      cy.get('#nome').should('have.value', 'João Silva');
  
      cy.get('#email').should('be.visible');
      cy.get('#email').type('joao.silva@email.com');
      cy.get('#email').should('have.value', 'joao.silva@email.com');
  
      cy.get('#telefone').should('be.visible');
      cy.get('#telefone').type('1199999999');
      cy.get('#telefone').should('be.visible', 10);
  
  
      cy.get('#senha').should('be.visible');
      cy.get('#senha').type('Teste@123');
      cy.get('#senha').should('have.value', 'Teste@123');
  
      cy.get('#confirma_senha').should('be.visible');
      cy.get('#confirma_senha').type('Teste@123');
      cy.get('#confirma_senha').should('have.value', 'Teste@123');
  
      cy.contains('Cadastrar').click();
      
      cy.get('form').submit();
  
  
    })
  })
