describe("Navigation", ()=>{
    it("Navigate through aplication", ()=>{
        cy.visit("/")
        cy.url().should('be', '/')
        cy.get('.top-links > .link-cart').click()
        cy.url().should('be', '/carrito')
    })
})