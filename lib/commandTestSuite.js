/* eslint-env node, mocha */
const TestSuite = require('./testSuite')

/**
 * Dataplug command test suite with common test cases
 */
class CommandTestSuite extends TestSuite {
  /**
   * @constructor
   *
   * @param {string} name Name of the command
   * @param {Command} command Command declaration
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
    return () => describe(`'${this._name}' command`, () => {
    })
  }
}

module.exports = CommandTestSuite
