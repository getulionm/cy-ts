class Cart {
  title: string = 'Your Cart';
  url: string = Cypress.config().baseUrl + '/cart.html';

  get products(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('.cart_item'); }
  get productPrices(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('.inventory_item_price'); }
  get checkoutButton(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('[data-test="checkout"]'); }

  /**
   * Finds the cheapest item among all in the cart
   * @returns {Cypress.Chainable<number>} lowestPrice Lowest price found for all items in the cart
   */
  findLowestPrice(): Cypress.Chainable<number> {
    return this.productPrices.then($priceElements => {
      const prices:number[] = [...$priceElements].map($element => parseFloat($element.innerText.substring(1)));
      const lowestPrice = Math.min(...prices);
      return lowestPrice;
    });
  }

  /**
   * Removes item from the cart
   * @param {number} price Price value to find the item to remove
   */
  removeItemByPrice(price: number) {
    cy.contains(price).parent().find('[id*=remove]').should('have.text', 'Remove').click()
  }
}

export default new Cart();