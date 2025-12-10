describe('02 - API tests (reqres.in)', () => {

  it('POST /users -> 201 y GET /users/{id}', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: { name: 'Test User', job: 'Automation Engineer' }
    }).then((postResp) => {

      expect(postResp.status).to.eq(201)
      expect(postResp.body).to.have.property('id')
      const id = postResp.body.id

      cy.request({
        method: 'GET',
        url: https://reqres.in/api/users/,
        failOnStatusCode: false
      }).then((getResp) => {
        expect([200,404]).to.include(getResp.status)
      })

    })
  })

})
