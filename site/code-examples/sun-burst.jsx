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
