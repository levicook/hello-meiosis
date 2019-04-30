
const m = require('mithril')
const stream = require('mithril/stream')
const createStates = require('../../createStates')

const createActions = require('./createActions')
const initialState = require('./initialState')
const Page = require('./Page')

var states
var actions

exports.onmatch = function () {
  const update = stream()
  states = createStates(initialState, update)
  actions = createActions(update)
}

exports.render = function () {
  return m(Page, {
    actions: actions,
    state: states()
  })
}
