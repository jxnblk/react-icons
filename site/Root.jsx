
var React = require('react')
var Tutorial = require('./Tutorial.jsx')

var Root = React.createClass({

  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </head>
        <body className="p3 container">
          <h1>{this.props.title}</h1>
          <Tutorial {...this.props} />
        </body>
      </html>
    )
  }

})

module.exports = Root

