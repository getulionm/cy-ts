/**
 * Loads user from fixtures/test-users.json
 * Sets loaded user in text context: this.testUser
 * @param {string} username target username key
 */
export const loadTestUser = (username: string): void => {
  const fixtureFilepath: string = 'test-users.json'

  cy.fixture(fixtureFilepath).then(function (users) {
    if (!users.hasOwnProperty(username)) {
      cy.log(`No user found by key: ${username}`)
    }
    this.testUser = users[username];
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      loadTestUser: typeof loadTestUser;
    }
  }
}