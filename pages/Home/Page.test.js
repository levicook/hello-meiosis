
const o = require('ospec')
const q = require('mithril-query')
const Page = require('./Page')

o.spec('pages/Home/Page', function () {
  var page

  o.beforeEach(function () {
    page = q(Page)
  })

  o('ol', function () {
    o(page.has('ol')).equals(true)
  })
})
