
var React = require('react')

var Polygon = React.createClass({

  getDefaultProps: function() {
    return {
      size: 128,
      d1: 1,
      teeth: 8,
      fill: 'currentcolor'
    }
  },

  render: function() {

    var size = this.props.size
    var fill = this.props.fill
    var c = size / 2
    var r1 = this.props.d1 * size / 2
    var angle = 360 / this.props.teeth
    var offset = 90
    var viewBox = [0, 0, size, size].join(' ')

    var rad = function(a) {
      return Math.PI * a / 180
    }

    var rx = function(r, a) {
      return c + r * Math.cos(rad(a))
    }

    var ry = function(r, a) {
      return c + r * Math.sin(rad(a))
    }

    var num = function(n) {
      return (n < 0.0000001) ? 0 : n 
    }
 
    var drawPolygon = function(n) {
      var d = []
      for (var i = 0; i < n; i++) {
        var a = angle * i - offset
        var line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a)),
          num(ry(r1, a)),
        ].join(' ')
        d.push(line)
      }
      return d.join(' ')
    }

    var pathData = [
      drawPolygon(this.props.teeth)
    ].join(' ')

    return (
      <svg
        xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        <path d={pathData} />
      </svg>
    )

  }

})

module.exports = Polygon

