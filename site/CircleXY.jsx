
var React = require('react')
var clrs = require('colors.css')

var CircleXY = React.createClass({

  render: function() {
    var size = 256
    var c = size / 2
    var r = size / 2 - 2
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

    var pathData = [
      'M', c, c,
      'L', rx(r, -90), ry(r, -90),
      'M', c, c,
      'L', rx(r, -30), ry(r, -30),
    ].join(' ')

    var styles = {
      stroke: {
        fill: 'none',
        stroke: 'currentcolor'
      },
      dot: {
        fill: clrs.aqua,
        opacity: .75
      }
    }

    return (
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        fill="currentcolor">
        <circle cx={c} cy={c} r={r} style={styles.stroke} />
        <path d={pathData}
          style={styles.stroke} />
        <circle cx={rx(r,-30)} cy={ry(r,-30)} r={6} style={styles.dot} />
      </svg>
    )
  }

})

module.exports = CircleXY

