
var React = require('react')
var Header = require('blk').Header
var Footer = require('blk').Footer
var Head = require('./Head.jsx')
var Tutorial = require('./Tutorial.jsx')
var Issues = require('./Issues.jsx')
var Cog = require('../Cog')
var Demo = require('./Demo.jsx')
var H2 = require('./H2.jsx')
var TweetButton = require('./TweetButton.jsx')

var Root = React.createClass({

  render: function() {
    var initialProps = {
      __html: safeStringify(this.props)
    }
    var links = [
      { href: '#live-demo', text: 'View Demo' },
      { href: '//github.com/jxnblk/react-icons', text: 'GitHub' },
    ]

    return (
      <html>
        <Head {...this.props} />
        <body className="p3 container">
          <div className="mb2 center">
            <Cog size={320} showGuidelines />
          </div>
          <Header {...this.props} links={links} />
          <div className="right-align py3">
            <TweetButton />
          </div>
          <Tutorial {...this.props} />
          <div className="py3">
            <H2>Live Demo</H2>
            <Demo />
          </div>
          <div className="center py3">
            <TweetButton />
          </div>
          <Issues {...this.props} />
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

