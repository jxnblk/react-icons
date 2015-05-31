
var React = require('react')

var TweetButton = React.createClass({

  render: function() {
    var href = [
      'https://twitter.com/intent/tweet?text=',
      this.props.title,
      '&url=http://jxnblk.com/react-icons',
      '&via=jxnblk'
    ].join('')
    href = encodeURI(href)
    return (
      <a href={href} className="btn btn-primary">
        Tweet
      </a>
    )
  }

})

module.exports = TweetButton

