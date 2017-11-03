/* eslint-env node, mocha */
require('chai')
  .should()
const dataplugTestsuite = require('../lib')

describe('dataplug-testsuite', () => {
  it('has "CollectionFactoryTestSuite" class', () => {
    dataplugTestsuite
      .should.have.property('CollectionFactoryTestSuite')
      .that.is.an('function')
  })

  it('has "CollectionTestSuite" class', () => {
    dataplugTestsuite
      .should.have.property('CollectionTestSuite')
      .that.is.an('function')
  })

  it('has "CommandTestSuite" class', () => {
    dataplugTestsuite
      .should.have.property('CommandTestSuite')
      .that.is.an('function')
  })

  it('has "CustomCommandTestSuite" class', () => {
    dataplugTestsuite
      .should.have.property('CustomCommandTestSuite')
      .that.is.an('function')
  })

  it('has "forCollectionFactory" function', () => {
    dataplugTestsuite
      .should.have.property('forCollectionFactory')
      .that.is.an('function')
  })

  it('has "forCollection" function', () => {
    dataplugTestsuite
      .should.have.property('forCollection')
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

  it('has "TestSuite" class', () => {
    dataplugTestsuite
      .should.have.property('TestSuite')
      .that.is.an('function')
  })
})
