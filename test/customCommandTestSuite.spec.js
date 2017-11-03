/* eslint-env node, mocha */
require('chai')
  .should()
const { CustomCommandTestSuite } = require('../lib')

describe('CustomCommandTestSuite', () => {
  new CustomCommandTestSuite('good-factory', {
    command: 'good-command',
    description: 'description',
    prerequisites: () => {},
    builder: () => {},
    handler: () => {}
  }).use()
})
