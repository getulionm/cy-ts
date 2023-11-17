describe('Tests "Featured articles" section links', () => {
  const TEST_SUITE = new Set();
  const EXPECTED_ARTICLES = 6

  beforeEach('Setup: Finds "Featured articles" links', () => {
    cy.visit('/');

    // Find featured articles section
    cy.get('.featured-articles')
      .find('a[href]') // Finds all links within section
      .each((link) => {
        cy.wrap(link)
          .invoke('attr', 'href')
          .then((result) => TEST_SUITE.add(result));
      });
  });

  it(`Finds ${EXPECTED_ARTICLES} "Featured articles" page links`, () => {
    expect(TEST_SUITE.size).to.eq(EXPECTED_ARTICLES);
  })

  it('Response code successful for each link', () => {
    TEST_SUITE.forEach((TEST_LINK) => {
      cy.log(`Executing GET on target ${TEST_LINK}`)
      cy.request(TEST_LINK).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  afterEach('Clear test links', () => {
    TEST_SUITE.clear();
  })
});
