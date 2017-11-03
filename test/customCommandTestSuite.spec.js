/* eslint-env node, mocha */
require('chai')
  .should()
const { CustomCommandTestSuite } = require('../lib')

describe('CustomCommandTestSuite', () => {
  new CustomCommandTestSuite('good-factory', {}).use()
})
