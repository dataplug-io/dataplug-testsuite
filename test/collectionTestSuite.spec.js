/* eslint-env node, mocha */
require('chai')
  .should()
const { CollectionTestSuite } = require('../lib')

describe('CollectionTestSuite', () => {
  new CollectionTestSuite('good-collection', {
    origin: 'test',
    name: 'good-collection',
    schema: {
      type: 'object',
      properties: {
        property: {
          type: 'string'
        }
      },
      required: ['property']
    }
  }).execute()
})
