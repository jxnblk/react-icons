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
