
var fs = require('fs');
var path = require('path');
var pkg = require('../package.json')
var cssnext = require('cssnext')


module.exports = {
  name: pkg.name,
  title: pkg.title,
  description: pkg.description,
  keywords: pkg.keywords,
  created: '05/31/2015',
  modified: new Date().toLocaleDateString(),
  css: cssnext([
    '@import "basscss";',
    '@import "basscss-input-range";',
    '@import "basscss-color-input-range";',
    '@import "basscss-highlight";',
    '@import "site/style.css";'
  ].join(''), {
    compress: true,
    features: {
      rem: false,
      colorRgba: false,
      customProperties: {
        variables: {
          'font-family': '"Avenir Next", "Helvetica Neue", Helvetica, sans-serif',
          'heading-font-weight': '600',
          'bold-font-weight': '600',
          'button-font-weight': '600',
          'h1': '2.5rem',
          'h2': '1.75rem',
          'h3': '1.375rem',
          'h4': '1.25rem',
          'h5': '1rem',
          'h6': '.875rem',
          'pre-font-size': 'var(--h5)',
          'container-width': '48em',
          'black': '#134',
          'pre-background-color': 'var(--darken-1)',
        }
      }
    }
  }),
  code: {
    svgComponent1: fs.readFileSync(path.join(__dirname, './code-examples/svg-component-1.jsx'), 'utf8'),
    defaultProps: fs.readFileSync(path.join(__dirname, './code-examples/default-props.jsx'), 'utf8'),
    renderVariables: fs.readFileSync(path.join(__dirname, './code-examples/render-variables.jsx'), 'utf8'),
    pathSquare: fs.readFileSync(path.join(__dirname, './code-examples/path-square.jsx'), 'utf8'),
    rxRy: fs.readFileSync(path.join(__dirname, './code-examples/rx-ry.jsx'), 'utf8'),
    drawPolygon: fs.readFileSync(path.join(__dirname, './code-examples/draw-polygon.jsx'), 'utf8'),
    sunBurst: fs.readFileSync(path.join(__dirname, './code-examples/sun-burst.jsx'), 'utf8'),
    flatTeeth: fs.readFileSync(path.join(__dirname, './code-examples/flat-teeth.jsx'), 'utf8'),
    splay: fs.readFileSync(path.join(__dirname, './code-examples/splay.jsx'), 'utf8'),
    splayDraw: fs.readFileSync(path.join(__dirname, './code-examples/splay-draw.jsx'), 'utf8'),
    hole: fs.readFileSync(path.join(__dirname, './code-examples/hole.jsx'), 'utf8'),
    build1: fs.readFileSync(path.join(__dirname, './code-examples/build-1.js'), 'utf8'),
    build2: fs.readFileSync(path.join(__dirname, './code-examples/build-2.js'), 'utf8'),
    packageScripts: fs.readFileSync(path.join(__dirname, './code-examples/package-scripts.json'), 'utf8'),
  }
}

