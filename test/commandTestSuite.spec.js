/* eslint-env node, mocha */
require('chai')
  .should()
const { CommandTestSuite } = require('../lib')

describe('CommandTestSuite', () => {
  new CommandTestSuite('good-command', {
    command: 'good-command',
    description: 'description',
    prerequisites: () => {},
    builder: () => {},
    handler: () => {}
  }).execute()
})
