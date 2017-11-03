/* eslint-env node, mocha */
require('chai')
  .should()
const { CollectionFactoryTestSuite } = require('../lib')

describe('CollectionFactoryTestSuite', () => {
  new CollectionFactoryTestSuite('good-factory', {}).use()
})
