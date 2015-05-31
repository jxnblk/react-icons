var React = require('react');

var Cog = React.createClass({

  getDefaultProps: function() {
    return {
      size: 32,
      fill: 'currentcolor'
    }
  },

  render: function() {

    // By using props, the config object in build.js
    // can change the size, fill, and other properties
    var size = this.props.size;
    var fill = this.props.fill;

    var viewBox = [0, 0, size, size].join(' ');

    // Placeholder for the path's d attribute value
    var pathData = [
      ''
    ].join(' ');

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

module.exports = Cog;
