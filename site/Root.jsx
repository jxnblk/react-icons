
var React = require('react')
var Head = require('./Head.jsx')
var Header = require('./Header.jsx')
var Tutorial = require('./Tutorial.jsx')
var Footer = require('./Footer.jsx')

var Root = React.createClass({

  render: function() {
    var initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <Head {...this.props} />
        <body className="p3 container">
          <Header {...this.props} />
          <Tutorial {...this.props} />
          <Footer {...this.props} />
          <script id="initial-props" type="application/json" dangerouslySetInnerHTML={initialProps} />
          <script src="bundle.js" />
        </body>
      </html>
    )
  }

})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}


module.exports = Root

