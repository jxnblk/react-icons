
var React = require('react')
var toJsx = require('react-to-jsx')
var hl = require('highlight.js')

var Highlight = React.createClass({

  getDefaultProps: function() {
    return {
      jsx: false
    }
  },

  render: function() {
    var code;
    var style = {
      whiteSpace: 'pre'
    }
    //if (this.props.jsx) {
    //  var jsx = toJsx(this.props.children, { indent: '  ' })
    //  code = hl.highlight('xml', jsx).value
    //} else {
    //}
    code = hl.highlightAuto(this.props.children.toString()).value
    return <pre style={style} dangerouslySetInnerHTML={{ __html: code }} />
    //return <pre style={style}>
    //  {this.props.children}
    //</pre>
  }

})

module.exports = Highlight

