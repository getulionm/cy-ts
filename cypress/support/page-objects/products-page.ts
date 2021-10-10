class ProductsPage {
  title: string = 'Products';
  url: string = Cypress.config().baseUrl + '/inventory.html';

  get products(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('.inventory_item'); }
  
  /**
   * Adds a product to the cart
   * @param {number} index Index used to find the product in the Products page
   */
  addProductToCartByIndex(index: number): void {
    cy.get('.inventory_item').eq(index).contains('.btn_inventory', 'Add to cart').click();
  }
}

export default new ProductsPage();