
var React = require('react')
var Avatar = require('jxnblk-avatar')

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="center mt3 py3">
        <a href="/" className="h5 bold black">
          <Avatar size={48} />
          <div>Made by Jxnblk</div>
        </a>
      </footer>
    )
  }

})

module.exports = Footer
