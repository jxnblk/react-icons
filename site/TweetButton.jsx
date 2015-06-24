
var React = require('react')

var TweetButton = React.createClass({

  render: function() {
    //var href = [
    //  'https://twitter.com/intent/tweet?text=',
    //  this.props.title,
    //  '&url=http://jxnblk.com/react-icons',
    //  '&via=jxnblk'
    //].join('')
    //href = encodeURI(href)
    //<a href={href} className="btn btn-primary">
    //  Tweet
    //</a>
    var text = 'Building SVG icons with React'
    var script = {
      __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
    }
    return (
      <div className="inline-block">
        <a href="https://twitter.com/share"
          className="twitter-share-button"
          data-text={text}
          data-via="jxnblk"
          data-size="large">
          Tweet
        </a>
        <script dangerouslySetInnerHTML={script} />
      </div>
    )
  }

})

module.exports = TweetButton

