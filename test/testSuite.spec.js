/* eslint-env node, mocha */
require('chai')
  .should()
const { TestSuite } = require('../lib')

describe('TestSuite', () => {
  describe('#assemble()', () => {
    it('throws', () => {
      (() => new TestSuite().assemble())
        .should.throw(/Not implemented/)
    })
  })
})
