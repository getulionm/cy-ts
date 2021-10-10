import loginPage from '../support/page-objects/login-page'
import header from '../support/page-objects/header-component'
import productsPage from '../support/page-objects/products-page'
import cartPage from '../support/page-objects/cart-page'
import checkoutPage from '../support/page-objects/checkout-page'

context('E2E Cart tests', function() {
  beforeEach('Loads user data', function() {
    cy.loadTestUser('standard_user');
  });

  it('User logs in, adds and removes items in cart', function() {
    loginPage.visit();
    cy.title().should('eq', loginPage.title);
    cy.url().should('eq', loginPage.url);
    
    loginPage.loginAs(this.testUser);
    cy.url().should('eq', productsPage.url);
    header.pageTitle.should('have.text', productsPage.title);

    header.sortDropdown.select('Price (high to low)');
    header.sortDropdown.find(':selected').should('have.value', 'hilo');

    productsPage.products.should('have.length', 6);
    productsPage.addProductToCartByIndex(-1);    
    productsPage.addProductToCartByIndex(-2);    
    header.cartIconBadge.should('have.text', 2);
    header.cartIcon.click();

    cy.url().should('eq', cartPage.url);
    header.pageTitle.should('have.text', cartPage.title);

    cartPage.products.should('have.length', 2);  
    cartPage.findLowestPrice().then(price => cartPage.removeItemByPrice(price));
    cartPage.products.should('have.length', 1);  
    header.cartIconBadge.should('have.text', 1);

    cartPage.checkoutButton.should('have.text', 'Checkout').click();
    cy.url().should('eq', checkoutPage.url);
    header.pageTitle.should('have.text', checkoutPage.title);
    checkoutPage.checkoutForm.should('be.visible');
  });
});