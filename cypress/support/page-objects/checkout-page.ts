class Checkout {
  title: string = 'Checkout: Your Information';
  url: string = Cypress.config().baseUrl + '/checkout-step-one.html';

  get checkoutForm(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('#checkout_info_container'); }
}

export default new Checkout();