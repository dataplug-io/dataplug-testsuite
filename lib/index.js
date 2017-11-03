const CollectionFactoryTestSuite = require('./collectionFactoryTestSuite')
const CollectionTestSuite = require('./collectionTestSuite')
const CommandTestSuite = require('./commandTestSuite')
const CustomCommandTestSuite = require('./customCommandTestSuite')

function createCollectionFactoryTestSuite () {
  return new CollectionFactoryTestSuite()
}

function createCollectionTestSuite () {
  return new CollectionTestSuite()
}

function createCommandTestSuite () {
  return new CommandTestSuite()
}

function createCustomCommandTestSuite () {
  return new CustomCommandTestSuite()
}

module.exports = {
  CollectionFactoryTestSuite,
  CollectionTestSuite,
  CommandTestSuite,
  CustomCommandTestSuite,
  forCollectionFactory: createCollectionFactoryTestSuite,
  forCollection: createCollectionTestSuite,
  forCommand: createCommandTestSuite,
  forCustomCommand: createCustomCommandTestSuite
}
