
var React = require('react')
var css = require('./style.css')

var Head = React.createClass({

  render: function() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={this.props.description} />
        <meta name="keywords" content={this.props.keywords.map(function(keyword) { return keyword }).join(', ')} />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
    )
  }

})

module.exports = Head

