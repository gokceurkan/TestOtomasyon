/// <reference types="cypress" />



describe('login tests', () => {
    beforeEach(() => {
      
      cy.visit('https://www.kitapyurdu.com/index.php?route=account/login')
    })
  
    it('Basarili login kontrol', () => {
    
      cy.get("input[name='email']").type("gokceisildakk@gmail.com")

      cy.get("input[name='password']").type("test12345")

      cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click()
  
    
    })


})
