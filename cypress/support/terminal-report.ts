require('cypress-terminal-report/src/installLogsCollector')({
  // What types of logs to collect and print. Default: all types are enabled.
  collectTypes: [
    'cons:log',
    'cons:info',
    'cons:warn',
    'cons:error',
    'cy:log',
    'cy:xhr',
    'cy:request',
    'cy:route',
    'cy:command'
  ]
});

