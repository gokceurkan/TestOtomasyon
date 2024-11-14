/// <reference types="cypress" />



describe('search kontrol', () => {
    beforeEach(() => {
      
        cy.visit('https://www.kitapyurdu.com/')
    })
  

    it('Search kontrol', () => {
    
    cy.get("[name='search_keyword']").type('Körlük');
    cy.get("[class='common-sprite button-search']").click();
    cy.get("[class='name']").should('have.length.greaterThan', 0);
    cy.get("[class='name']").first().should('contain', 'Körlük');

      
      })

})
