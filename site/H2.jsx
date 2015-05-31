
var React = require('react')

var H2 = React.createClass({

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
      <h2 id={id}>
        <a href={'#'+id} style={styles.link}>
          {this.props.children}
        </a>
      </h2>
    )
  }

})

module.exports = H2

