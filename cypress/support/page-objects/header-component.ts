class Header {
  get pageTitle(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('#header_container .title'); }
  get cartIcon(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('#shopping_cart_container'); }
  get cartIconBadge(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('.shopping_cart_badge'); }
  get sortDropdown(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('[data-test="product_sort_container"]'); }
}

export default new Header();