describe('Form Input', () => {
    it('navigate to site', () => {
        cy.visit('http://localhost:3000') 
        cy.url().should('include', 'localhost')
    })
    it('go to pizza form', () => {
        cy.get('div.orderForm').click()
    })
    it('submit is disabled', () => {
        // since I did not use disabled for validation,
        // this is checking to see if I have created an
        // order from clicking submit - this will only
        //exist if at least one order has been placed
        cy.get('p.submitButton').click()
        cy.get('div.order-container').should('not.exist')
    })
    it('can type a name', () => {
        // testing just one character typed for additional tests to work from
        cy.get('input[name=userName')
          .type('D')
    })
    it('can select toppings', () => {
        cy.get('input[name=pepperozzi]').click()
        cy.get('input[name=muchroom]').click()
        cy.get('input[name=octopus]').click()
        cy.get('input[name=entitlement]').click()
    })
    it('can type instructions', () => {
        cy.get('textarea[name=pizzaInstructions]')
          .clear()
          .type('shake it around in the box if you have the time')
    })
    it('can select size', () => {
        cy.get('select[name=pizzaSize]')
          .select('Small')
    })
})

describe('Form Validation and Submit', () => {
    // test name length and submit button activity
    it('will not submit when name < 3 characters', () => {
        // click with one character and test submit button
        cy.get('p.submitButton').click()
        cy.get('div.order-container').should('not.exist')
        // test with two characters, should not create order
        cy.get('input[name=userName')
        .type('a')
        cy.get('p.submitButton').click()
        cy.get('div.order-container').should('not.exist')
    })
    // three characters should submit an order
    it('will submit with name of 3+ characters', () => {
        cy.get('input[name=userName')
        .type('n')
        cy.get('p.submitButton').click()
        cy.get('div.order-container').should('exist')
    })
})