
const m = require('mithril')
const routes = require('./routes')

m.route.prefix('')
m.route(document.getElementById('app'), '/', routes)
