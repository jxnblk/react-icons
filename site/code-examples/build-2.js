var build = function(name, props) {

  props.size = props.size || 64
  var size = props.size
  var viewBox = [0, 0, size, size].join(' ')
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" ',
      'viewBox="', viewBox, '" ',
      'width="', size, '" ',
      'height="', size, '" ',
    '>',
    React.renderToStaticMarkup(React.createElement(Icon, props)),
    '</svg>'
  ].join('')
  
  fs.writeFileSync('icons/' + name + '.svg', svg)

}
