describe('Tests "Featured articles" section links', () => {
  const TEST_SUITE = [];

  beforeEach('Setup: Finds "Featured articles" links', () => {
    cy.visit('/');

    cy.get('.featured-articles').find('a[href]').each((link) => {
      cy.wrap(link)
        .invoke('attr', 'href')
        .then((result) => TEST_SUITE.push(result));
    });
  });

  it('Finds 6 "Featured articles" page links', () => {
    expect(TEST_SUITE.length).to.eq(6);
  })

  it('Response code successful for each link', () => {
    TEST_SUITE.forEach((TEST_LINK) => {
      cy.log(`Executing GET on target ${TEST_LINK}`)
      cy.request(TEST_LINK).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

});
