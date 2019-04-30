
const o = require('ospec')
const q = require('mithril-query')
const Page = require('./Page')

o.spec('pages/Counter/Page', function () {
  var page

  o.beforeEach(function () {
    page = q(Page, {
      actions: {
      },
      state: {
        count: 100
      }
    })
  })

  o('h1', function () {
    o(page.has('h1')).equals(true)
  })
})
