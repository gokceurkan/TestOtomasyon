/// <reference types="cypress" />



describe('sepete ürün ekleme', () => {
    beforeEach(() => {
      
        cy.visit('https://www.kitapyurdu.com/')
    })
  

    it('Sepete ekleme kontrol', () => {

        cy.get("[id='product-21087']").first().click();
        cy.get("[class='pr_cart product-info']").click();
        cy.get("[class='fl']").should('contain', '1');

      
      })

})
