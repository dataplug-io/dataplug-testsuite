/**
 * Base test suite
 */
class TestSuite {
  /**
   * Assembles test suite
   *
   * @abstract
   * @returns {Function} Assembled test suite
   */
  assemble () {
    throw new Error('Not implemented')
  }

  /**
   * Executes the test suite
   */
  execute () {
    this.assemble()()
  }
}

module.exports = TestSuite
