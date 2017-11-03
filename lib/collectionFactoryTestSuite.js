/* eslint-env node, mocha */
const TestSuite = require('./testSuite')

/**
 * Dataplug collection factory test suite with common test cases
 */
class CollectionFactoryTestSuite extends TestSuite {
  /**
   * @constructor
   *
   * @param {string} name Name of the collection factory
   * @param {CollectionFactory} factory Collection factory
   */
  constructor (name, factory) {
    super()

    this._name = name
    this._factory = factory
  }

  /**
   * @inheritdoc
   * @override
   */
  assemble () {
    return () => describe(`'${this._name}' collection factory`, () => {
    })
  }
}

module.exports = CollectionFactoryTestSuite
