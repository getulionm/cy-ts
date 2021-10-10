# Test automation foundation
Welcome to this test automation framework.  
The tool of choice for this implementation is [Cypress.io](https://github.com/cypress-io/cypress).  
Cypress is a modern solution in test automation, allowing for reliable test execution and minimal configuration.

---
## This repository contains:
- Cypress installation and configuration
- Cypress support plugin for terminal reporting
- Github actions configuration: test execution on push
- TS setup
- Eslint setup

---
## Implementation details:
Test structure consists of a [page-object model](https://martinfowler.com/bliki/PageObject.html) approach.  
Classes are created to represent a page, or a component in a page.  
Page-objects contain the following structure:
1. Properties. (url, title)
2. HTMLElement getters for this page. Getters must return the HTMLElement to allow for [action chaining](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands).
3. Page-actions: Reusable functions that contains a grouping of actions in this specific page. Example: [loginAs](https://github.com/getulionm/cy-ts/commit/9fbbab48effbd43be5038cfa8f3b32b411ae99e2#diff-1fa596491f5b74421a3f130f8f868f0eec754d138d79a15d93ff6af0949e62fdR20-R25) function

---
## Installation and execution:
From the root folder:
1. Run `npm install` to install all dependencies
2. Run the Cypress test runner. There are 2 options:
- `npm run cypress:run` for headless execution and terminal output.
- `npm run cypress:open` opens the UI test runner, where a spec file can be clicked.

Tests can also be executed on [this project's Github Actions page](https://github.com/getulionm/cy-ts/actions)
  
---
Happy testing!

Getulio Gasparotto Dadald - 10/10/2021