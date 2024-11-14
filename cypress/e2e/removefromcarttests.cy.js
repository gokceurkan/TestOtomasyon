describe('sepetten ürün çikarma kontrol', () => {
    beforeEach(() => {
      
        cy.visit('https://www.kitapyurdu.com/')
    })
  
      it('Sepetten ürün çikarma kontrol', () => {

        cy.get("[id='product-21087']").first().click();
        cy.get("[class='pr_cart product-info']").click();
        cy.get("[class='common-sprite fl']").click();
        cy.get("[class='checkout fl']").click();
        cy.get("[class='text-gray-700']").should('have.length', 1);
        cy.get("[class='bg-white d-flex pe-4px ps-8px pt-8px ']").first().within(() => {
            cy.get("[class='cart-sprite cart-icon-trash']").click()
        })
        cy.get("button").contains("Sil").click()




      
      })


})
