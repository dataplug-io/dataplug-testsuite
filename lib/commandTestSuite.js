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
      this._basicSuite()

      if (this._command.prerequisites) {
        this._prerequisitesSuite()
      }
    })
  }

  /**
   * Basic command suite
   */
  _basicSuite () {
    it('has identifier', () => {
      this._command
        .should.have.property('command')
        .that.has.lengthOf.at.least(1)
    })

    it('has description', () => {
      this._command
        .should.have.property('description')
        .that.has.lengthOf.at.least(1)
    })

    it('has builder', () => {
      this._command
        .should.have.property('builder')
        .that.is.a('function')
    })

    it('has handler', () => {
      this._command
        .should.have.property('handler')
        .that.is.a('function')
    })
  }

  /**
   * Prerequisites suite
   */
  _prerequisitesSuite () {
    describe('prerequisites', () => {
      it('is a function', () => {
        this._command.prerequisites
          .should.be.a('function')
      })
    })
  }
}

module.exports = CommandTestSuite
