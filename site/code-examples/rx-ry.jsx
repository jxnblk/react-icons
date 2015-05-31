var rad = function(a) {
  return Math.PI * a / 180
}

var rx = function(r, a) {
  return c + r * Math.cos(rad(a))
}

var ry = function(r, a) {
  return c + r * Math.sin(rad(a))
}
