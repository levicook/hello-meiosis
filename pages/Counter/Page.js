
const m = require('mithril')

exports.view = function (vnode) {
  const attrs = vnode.attrs

  const actions = attrs.actions
  const state = attrs.state

  return [
    m('h1', state.count),
    m('button', {
      onclick: actions.increment
    }, [
      ' + '
    ]),
    ' ',
    m('button', {
      onclick: actions.decrement
    }, [
      ' - '
    ])
  ]
}
