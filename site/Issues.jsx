
var React = require('react')

var Issues = React.createClass({

  render: function() {
    return (
      <div className="center py3">
        <div className="px2 py3 border rounded">
          <h4 className="mt1">Questions, Comments, Suggestions?</h4>
          <a href="//github.com/jxnblk/react-icons/issues"
            className="btn btn-outline blue">
            Open an Issue
          </a>
        </div>
      </div>
    )
  }

})

module.exports = Issues

