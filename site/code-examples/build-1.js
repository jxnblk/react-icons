var fs = require('fs')
var React = require('react')
var Cog = require('./Cog')

var build = function(name, props) {

  var svg = React.renderToStaticMarkup(React.createElement(Cog, props))
  
  fs.writeFileSync('icons/' + name + '.svg', svg)

}

build('default', {})
