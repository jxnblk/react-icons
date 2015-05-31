
var React = require('react')

var SunBurst = React.createClass({

  getDefaultProps: function() {
    return {
      size: 256,
      d1: 1,
      d2: .6875,
      teeth: 8,
      fill: 'currentcolor'
    }
  },

  render: function() {

    var size = this.props.size
    var c = size / 2
    var r1 = this.props.d1 * size / 2
    var r2 = this.props.d2 * size / 2
    var angle = 360 / this.props.teeth
    var offset = 90
    var fill = this.props.fill
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
 
    var drawTeeth = function(n) {
      var d = []
      for (var i = 0; i < n; i++) {
        var a = angle * i - offset
        var a1 = a + 6
        var a2 = a + angle - 6
        var line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a)),
          num(ry(r1, a)),
          'L',
          num(rx(r2, a1)),
          num(ry(r2, a1)),
          'A', r2, r2,
          '0 0 1',
          num(rx(r2, a2)),
          num(ry(r2, a2)),
        ].join(' ')
        d.push(line)
      }
      return d.join(' ')
    }

    var pathData = [
      drawTeeth(this.props.teeth)
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

module.exports = SunBurst

