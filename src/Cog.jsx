
var React = require('react')

var Icon = React.createClass({

  getDefaultProps: function() {
    return {
      size: 64,
      d1: 1,
      d2: .6875,
      d3: .375,
      teeth: 8,
      splay: 0.375,
      fill: 'currentcolor'
    }
  },

  render: function() {

    var size = this.props.size

    // Center
    var c = size / 2

    // Radii
    var r1 = this.props.d1 * size / 2
    var r2 = this.props.d2 * size / 2
    var r3 = this.props.d3 * size / 2

    // Angle
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

    // Angle offsets to splay tooth
    var ta = angle / 4
    var splay = this.props.splay * ta
    var tw = Math.tan(rad(ta - splay)) * r1

    // Flat tooth end x and y coordinates
    var tx = function(a, w) {
      return Math.sin(rad(a)) * w
    }

    var ty = function(a, w) {
      return Math.cos(rad(a)) * w
    }

    var drawTeeth = function(n) {
      var d = []
      for (var i = 0; i < n; i++) {
        var a = angle * i - offset
        var a1 = a + ta + splay
        var a2 = a + angle - ta - splay
        var line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a) + tx(a, tw)),
          num(ry(r1, a) - ty(a, tw)),
          'L',
          num(rx(r1, a) - tx(a, tw)),
          num(ry(r1, a) + ty(a, tw)),
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

    var hole = function() {
      return [
        'M', c, c - r3,
        'A', r3, r3,
        '0 0 0',
        c, c + r3,
        'A', r3, r3,
        '0 0 0',
        c, c - r3,
      ].join(' ')
    }

    var pathData = [
      drawTeeth(this.props.teeth),
      hole()
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

module.exports = Icon

