describe('01 - Login tests (SauceDemo)', () => {

  it('Login exitoso con credenciales válidas', () => {
    cy.loginSauce()
    cy.url().should('include', 'inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.screenshot('.inventory_list visible after login')
  })

  it('Login fallido con contraseña incorrecta', () => {
    cy.loginSauce('standard_user','wrong_password')
    cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface')
  })

  it('Validación de campos obligatorios', () => {
    cy.visit('/')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain','Username is required')
  })

})
