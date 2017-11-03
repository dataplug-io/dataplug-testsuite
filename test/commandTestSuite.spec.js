/* eslint-env node, mocha */
require('chai')
  .should()
const { CommandTestSuite } = require('../lib')

describe('CommandTestSuite', () => {
  new CommandTestSuite('good-factory', {}).use()
})
