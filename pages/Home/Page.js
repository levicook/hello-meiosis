
const m = require('mithril')

exports.view = function (vnode) {
  return [
    m('ol', [
      m('li', [
        m('a[href=/counter]', 'Counter Demo')
      ]),
      m('li', [
        m('a[href=/tree]', 'Tree Demo')
      ])
    ])
  ]
}
