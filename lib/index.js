const CollectionFactoryTestSuite = require('./collectionFactoryTestSuite')
const CollectionTestSuite = require('./collectionTestSuite')
const CommandTestSuite = require('./commandTestSuite')
const CustomCommandTestSuite = require('./customCommandTestSuite')
const TestSuite = require('./testSuite')

function createCollectionFactoryTestSuite (...args) {
  return new CollectionFactoryTestSuite(...args)
}

function createCollectionTestSuite (...args) {
  return new CollectionTestSuite(...args)
}

function createCommandTestSuite (...args) {
  return new CommandTestSuite(...args)
}

function createCustomCommandTestSuite (...args) {
  return new CustomCommandTestSuite(...args)
}

module.exports = {
  CollectionFactoryTestSuite,
  CollectionTestSuite,
  CommandTestSuite,
  CustomCommandTestSuite,
  forCollectionFactory: createCollectionFactoryTestSuite,
  forCollection: createCollectionTestSuite,
  forCommand: createCommandTestSuite,
  forCustomCommand: createCustomCommandTestSuite,
  TestSuite
}
