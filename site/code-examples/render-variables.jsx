render: function() {

  var size = this.props.size
  var fill = this.props.fill

  // Center
  var c = size / 2

  // Radii
  var r1 = this.props.d1 * size / 2
  var r2 = this.props.d2 * size / 2
  var r3 = this.props.d3 * size / 2

  // Angle
  var angle = 360 / this.props.teeth
  var offset = 90

  var viewBox = [0, 0, size, size].join(' ')

  // ...

}
