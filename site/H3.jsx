
var React = require('react')

var H3 = React.createClass({

  render: function() {

    var styles = {
      heading: {
      },
      link: {
        color: 'inherit'
      }
    }

    var id = this.props.children.toString()
      .toLowerCase()
      .replace(/\s/g, '-')
    id = encodeURI(id)

    return (
      <h3 id={id}>
        <a href={'#'+id} style={styles.link}>
          {this.props.children}
        </a>
      </h3>
    )
  }

})

module.exports = H3

