
const o = require('ospec')
const stream = require('mithril/stream')
const createStates = require('../../createStates')
const createActions = require('./createActions')

o.spec('pages/Counter/createActions', function () {
  o('is a function', function () {
    o(typeof createActions).equals('function')
  })

  o.spec('actions', function () {
    var actions
    var states

    o.beforeEach(function () {
      const update = stream()
      states = createStates({ count: 0 }, update)
      actions = createActions(update)
    })

    o('increment', function () {
      o(typeof actions.increment).equals('function')
      actions.increment()
      o(states()).deepEquals({ count: 1 })

      actions.increment()
      o(states()).deepEquals({ count: 2 })
    })

    o('decrement', function () {
      o(typeof actions.decrement).equals('function')

      actions.decrement()
      o(states()).deepEquals({ count: -1 })

      actions.decrement()
      o(states()).deepEquals({ count: -2 })
    })
  })
})
