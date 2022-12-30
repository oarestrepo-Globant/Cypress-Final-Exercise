import './commands'
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


// npx cypress run --env allure=true
// allure serve allure-results/