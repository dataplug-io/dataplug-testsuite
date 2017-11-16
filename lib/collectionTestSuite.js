/* eslint-env node, mocha */
const Ajv = require('ajv')
const { SchemaFlatter } = require('@dataplug/dataplug-flatters')
const TestSuite = require('./testSuite')

/**
 * Dataplug collection test suite with common test cases
 */
class CollectionTestSuite extends TestSuite {
  /**
   * @constructor
   *
   * @param {string} name Name of the collection
   * @param {Collection} collection Collection instance
   */
  constructor (name, collection) {
    super()

    this._name = name
    this._collection = collection
  }

  /**
   * @inheritdoc
   * @override
   */
  assemble () {
    return () => describe(`'${this._name}' collection`, () => {
      this._basicSuite()

      if (this._collection.schema) {
        this._schemaSuite()
      }
    })
  }

  /**
   * Basic collection suite
   */
  _basicSuite () {
    it('has origin', () => {
      this._collection
        .should.have.property('origin')
        .that.has.lengthOf.at.least(1)
    })

    it('has name', () => {
      this._collection
        .should.have.property('name')
        .that.has.lengthOf.at.least(1)
    })
  }

  /**
   * Collection schema testing suite
   */
  _schemaSuite () {
    describe('schema', () => {
      it('is valid', () => {
        (() => new Ajv().compile(this._collection.schema))
          .should.not.throw()
      })

      it('has required properties', () => {
        this._collection.schema
          .should.have.property('required').with.lengthOf.at.least(1)
      })

      it('flattens', () => {
        (() => new SchemaFlatter().flatten(this._collection.schema, this._collection.name))
          .should.not.throw()
      })
    })
  }
}

module.exports = CollectionTestSuite
