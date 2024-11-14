/// <reference types="cypress" />



describe('favoriye ekleme kontrolü', () => {
    beforeEach(() => {
      
      cy.visit('https://www.kitapyurdu.com/index.php?route=account/login')
    })
  
    it('favoriye ekleme kontrolü', () => {
    
      cy.get("input[name='email']").type("gokceisildakk@gmail.com")

      cy.get("input[name='password']").type("test12345")

      cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click()

      cy.wait(2000);

      cy.get("[name='search_keyword']").type('Körlük');

    cy.get("[class='common-sprite button-search']").click();

    cy.get("[class='name']").first().find("a[href='https://www.kitapyurdu.com/kitap/korluk/648531.html&filter_name=K%C3%B6rl%C3%BCk']").click();

    cy.get("[class='sprite__product icon__favourite icon--dimension-addlist icon--opacitiy-4']").click();

    
    })


})
