
var React = require('react')
var hl = require('highlight.js')

var Highlight = React.createClass({

  render: function() {
    var style = {
      whiteSpace: 'pre'
    }
    var code = hl.highlightAuto(this.props.code).value
    return <pre style={style} dangerouslySetInnerHTML={{ __html: code }} />
  }

})

module.exports = Highlight

