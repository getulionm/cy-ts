const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

const terminalLogOptions = {
    // Prints terminal logs based on test status. Valid options: 'onFail'(default),  'always', 'never'
    printLogsToConsole: 'always'
};

/**
 * Installs the cypress-terminal-report plugin
 * @param {Function} on Cypress's plugin interface
 */
 module.exports = (on: unknown) => {
    installLogsPrinter(on, terminalLogOptions);
};