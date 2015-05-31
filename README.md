# Building SVG icons with React

A quick tutorial on using JavaScript and React to create pixel-perfect, mathematically-derived SVG icons

## Why Use React?

Using GUI design tools like Adobe Illustrator to create icons leaves a lot of room for error when building grid-based graphics. 
These tools are severely limited in their ability to use grids, basic math, variables, arrays, and functions – things that are helpful for creating pixel-perfect graphics.
JavaScript excels at math, and React provides a simple way of creating static SVGs, with the ability to add interactivity if so desired. 

```jsx:example
React.createElement(Icon)
```

```xml
<Icon />
```

## Cog Icon
- Sketch image
- Three radii
- Radial grid with any number of teeth
- Flat edge of teeth
- Splay for the teeth


## Initial Setup

- npm init
- npm i --save-dev react react-tools
- mkdir src
- build.js script

```js
var fs = require('fs');
var React = require('react');
var Icon = require('./Icon');

var build = function(name, config) {
  var svg = React.renderToStaticMarkup(React.createElement(Icon, config));
  fs.writeFileSync(name + '.svg', svg);
}

build('test', {});
```

- package script

```json
"scripts": {
  "build": "node build",
  "jsx": "jsx -x jsx src .",
  "watch:jsx": "jsx -w -x jsx src .",
  "start": "npm run watch:jsx"
},
```

- Create Icon.jsx

```js
var React = require('react');

var Icon = React.createClass({

  getDefaultProps: function() {
    return {
      size: 32,
      fill: 'currentcolor'
    }
  },

  render: function() {

    // By using props, the config object in build.js
    // can change the size, fill, and other properties
    var size = this.props.size;
    var fill = this.props.fill;

    var viewBox = [0, 0, size, size].join(' ');

    // Placeholder for the path's d attribute value
    var pathData = [
      ''
    ].join(' ');

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        <path d={pathData} />
      </svg>
    )

  }

});

module.exports = Icon;
```

!! Check why xmlns doesn't work in react

- Convert jsx to js: `npm run jsx`
- Test build: `npm run build` 
- Watch jsx: new terminal `npm run watch:jsx`

## Defining Radii and other values
- Modular scale based on size
- outer, middle, inner circles
- number of teeth

```js
getDefaultProps: function() {
  return {
    size: 32,
    outer: .5,
    middle: .375,
    inner: .25,
    teeth: 8,
    splay: 3,
    fill: 'currentcolor'
  }
},
```

```js
var size = this.props.size;
// Radii
var r1 = this.props.outer * size;
var r2 = this.props.middle * size;
var r3 = this.props.inner * size;
// Angle
var a = 360 / this.props.teeth;
// Tooth splay in degrees
var splay = this.props.splay;
```

## Path data
- Move to top center

```js
var pathData = [
  'M', r1, 0
].join(' ');
```

## Function to build _n_ number of teeth
- start with a polygon

- start at center
- convert angle to radians (PI * a/180)

```js
var rx = function(r, a) {
  return r + r * Math.cos(Math.PI * a/180);
};

var ry = function(r, a) {
  return r + r * Math.sin(Math.PI * a/180);
};
```

```js
var drawTeeth = function(n) {
  var d = [];
  for (var i = 0; i < n; i++) {
    var offset = 90;
    var ai = (a * (i + 1)) - offset;
    console.log(ai, rx(r1, ai), ry(r1, ai));

    var line = [
      'L',
      rx(r1, ai),
      ry(r1, ai),
    ].join(' ');
    d.push(line);
  }
  return d;
};
```

```js
var pathData = [
  'M', r1, 0,
  drawTeeth(this.props.teeth),
].join(' ');
```

