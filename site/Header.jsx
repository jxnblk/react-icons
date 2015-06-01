
var React = require('react')
var clrs = require('colors.css')
var Cog = require('../Cog')
var TweetButton = require('./TweetButton.jsx')

var Header = React.createClass({

  render: function() {
    var created = new Date(this.props.created).toDateString()
    var modified = new Date(this.props.modified).toDateString()
    return (
      <header className="mb3 py3">
        <div className="mb2 center">
          <Cog size={320} showGuidelines />
        </div>
        <h3 className="h5 mt0 mb1">
          <a href="/" className="black">Jxnblk.com</a>
        </h3>
        <h1 className="m0">{this.props.title}</h1>
        <h2 className="mt0">{this.props.description}</h2>
        <div className="h6 mb3">
          <b>{created}</b>
          {/*
          <br className="sm-hide" /> Updated: <b>{modified}</b>
          */}
        </div>
        <div className="right-align mxn2">
          <a href="#live-demo" className="btn mt1 mb1">View Demo</a>
          <a href="https://github.com/jxnblk/react-icons" className="btn mt1 mb1">GitHub</a>
          <div className="inline-block ml2 mr2 mt1 mb1">
            <TweetButton {...this.props} />
          </div>
        </div>
      </header>
    )
  }

})

module.exports = Header
