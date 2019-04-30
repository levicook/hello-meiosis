
const stream = require('mithril/stream')

function accumulator (state, patch) {
  return patch(state)
}

function createStates (initialState, update) {
  return stream.scan(accumulator, initialState, update)
}

module.exports = createStates
