/* eslint-env node, mocha */
require('chai')
  .should()
const dataplugTestsuite = require('../lib')

describe('dataplug-testsuite', () => {
  it('has "forCollection" function', () => {
    dataplugTestsuite
      .should.have.property('forCollection')
      .that.is.an('function')
  })

  it('has "forFactory" function', () => {
    dataplugTestsuite
      .should.have.property('forFactory')
      .that.is.an('function')
  })

  it('has "forCommand" function', () => {
    dataplugTestsuite
      .should.have.property('forCommand')
      .that.is.an('function')
  })

  it('has "forCustomCommand" function', () => {
    dataplugTestsuite
      .should.have.property('forCustomCommand')
      .that.is.an('function')
  })
})
