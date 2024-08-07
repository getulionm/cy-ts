import tableRowPage from '../support/page-objects/table-row-page'

describe('Table row tests', () => {

  it('Counts number of table rows', () => {
    tableRowPage.visit()
    tableRowPage.technicalSummaryTable.should('be.visible')

    tableRowPage.technicalSummaryTable
      .find('tr')
      .should('have.length', 7)
      .then(tableRows => {
        const rowCount = Cypress.$(tableRows).length;
        cy.log(`Found ${rowCount} rows`)
      })
  })
  
});
