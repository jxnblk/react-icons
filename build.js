
var fs = require('fs')
var React = require('react')
var Icon = require('./Icon')


var build = function(name, config) {

  config.size = config.size || 64
  var size = config.size
  var viewBox = [0, 0, size, size].join(' ')
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" ',
      'viewBox="', viewBox, '" ',
      'width="', size, '" ',
      'height="', size, '" ',
    '>',
    React.renderToStaticMarkup(React.createElement(Icon, config)),
    '</svg>'
  ].join('')
  
  fs.writeFileSync('icons/' + name + '.svg', svg)

}


build('default', {})
build('nosplay', { splay: 0 })
build('three',   { teeth: 3 })
build('four',    { teeth: 4 })
build('five',    { teeth: 5 })
build('six',     { teeth: 6 })
build('seven',   { teeth: 7 })
build('eight',   { teeth: 8 })
build('nine',    { teeth: 9 })
build('ten',     { teeth: 10 })

build('splay1', { splay: .25 })
build('splay2', { splay: .5 })

