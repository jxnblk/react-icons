
var React = require('react')
var clrs = require('colors.css')
var Cog = require('../Cog')

var Header = React.createClass({

  render: function() {
    var created = new Date(this.props.created).toDateString()
    var modified = new Date(this.props.modified).toDateString()
    return (
      <header className="py3">
        <div className="mb2 center">
          <Cog size={320} fill={clrs.blue} showGuidelines />
        </div>
        <h3 className="h5 mt0 mb1">
          <a href="/" className="black">Jxnblk.com</a>
        </h3>
        <h1 className="m0">{this.props.title}</h1>
        <h2 className="mt0">{this.props.description}</h2>
        <div className="h6 caps">
          created: <b>{created}</b>
          {' · ' }
          modified: <b>{modified}</b>
        </div>
      </header>
    )
  }

})

module.exports = Header
