var ta = angle / 4
var tw = Math.tan(rad(ta)) * r1

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
    var a1 = a + ta
    var a2 = a + angle - ta
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
