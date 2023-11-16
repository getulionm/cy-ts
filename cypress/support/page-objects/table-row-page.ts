class TableRowPage {
  url: string = Cypress.config().baseUrl + '/en-US/docs/Web/HTML/Element/tr';

  get technicalSummarySection(): Cypress.Chainable<JQuery<HTMLElement>> { return cy.get('#technical_summary'); }
  get technicalSummarySectionTable(): Cypress.Chainable<JQuery<HTMLElement>> { return this.technicalSummarySection.nextUntil('.table-container').first(); }

  /**
   * Navigates to the Table Row page
   */
  visit(): void { cy.visit(this.url); }

}

export default new TableRowPage();