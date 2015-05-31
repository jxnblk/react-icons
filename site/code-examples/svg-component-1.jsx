var React = require('react')

var Cog = React.createClass({

  getDefaultProps: function() {
    return {
      size: 64,
      fill: 'currentcolor'
    }
  },

  render: function() {

    var size = this.props.size
    var fill = this.props.fill

    var viewBox = [0, 0, size, size].join(' ')

    var pathData = [
      ''
    ].join(' ')

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        <path d={pathData} />
      </svg>
    )

  }

});

module.exports = Cog
