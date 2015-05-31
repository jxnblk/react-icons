var num = function(n) {
  return (n < 0.0000001) ? 0 : n 
}

var drawTeeth = function(n) {
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
  drawTeeth(this.props.teeth)
].join(' ')
