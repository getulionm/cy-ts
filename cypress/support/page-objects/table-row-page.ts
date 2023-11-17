class TableRowPage {
  url: string = Cypress.config().baseUrl + '/en-US/docs/Web/HTML/Element/tr';

  // Finds the "Technical summary" page header
  get technicalSummaryHeader() {
    return cy.get('#technical_summary');
  }
  // Finds the "Technical summary" table, using a sibling selector
  get technicalSummaryTable() {
    return this.technicalSummaryHeader.nextUntil('table').first();
  }

  /**
   * Navigates to the Table Row page
   */
  visit() { cy.visit(this.url); }

}

export default new TableRowPage();