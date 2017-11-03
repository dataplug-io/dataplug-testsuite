/* eslint-env node, mocha */
const TestSuite = require('./testSuite')

/**
 * Dataplug command test suite with common test cases
 */
class CustomCommandTestSuite extends TestSuite {
  /**
   * @constructor
   *
   * @param {string} name Name of the command
   * @param {Command} command Custom command declaration
   */
  constructor (name, command) {
    super()

    this._name = name
    this._command = command
  }

  /**
   * @inheritdoc
   * @override
   */
  assemble () {
    return () => describe(`'${this._name}' custom command`, () => {
    })
  }
}

module.exports = CustomCommandTestSuite
