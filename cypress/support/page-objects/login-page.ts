import {TestUser} from '../interfaces/test-user'

class LoginPage {
  title: string = 'Swag Labs';
  url: string = Cypress.config().baseUrl + '/';

  get usernameField(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('[id="user-name"]'); }
  get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('[id="password"]'); }
  get loginButton(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('[id="login-button"]'); }

  /**
   * Navigates to the Login page
   */
  visit(): void { cy.visit(this.url); }

  /**
   * Completes credentials form and clicks on login button
   * @param {TestUser} testUser JSON object defined in fixtures
   */
  loginAs(testUser: TestUser): void {
    this.usernameField.type(testUser.name);
    this.passwordField.type(testUser.password);
    this.loginButton.click();
  }
}

export default new LoginPage();