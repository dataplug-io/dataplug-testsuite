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
   * Uses the test suite
   */
  use () {
    this.assemble()()
  }
}

module.exports = TestSuite
