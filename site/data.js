
var fs = require('fs');
var path = require('path');
var pkg = require('../package.json')
var cssnext = require('cssnext')

var content = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8')

module.exports = {
  name: pkg.name,
  title: pkg.title,
  description: pkg.description,
  content: content,
  css: cssnext([
    '@import "basscss";',
    '@import "basscss-highlight";',
    '@import "site/style.css";'
  ].join(''), {
    compress: true,
    features: {
      rem: false,
      colorRgba: false,
      customProperties: {
        variables: {
          //'font-family': '"Avenir Next", "Helvetica Neue", Helvetica, sans-serif',
          'heading-font-weight': '500',
          'bold-font-weight': '500',
          'button-font-weight': '500',
          'h1': '2.5rem',
          'h2': '1.75rem',
          'h3': '1.375rem',
          'h4': '1.25rem',
          'h5': '1rem',
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
    build1: fs.readFileSync(path.join(__dirname, './code-examples/build-1.js'), 'utf8'),
    build2: fs.readFileSync(path.join(__dirname, './code-examples/build-2.js'), 'utf8'),
    packageScripts: fs.readFileSync(path.join(__dirname, './code-examples/package-scripts.json'), 'utf8'),
  }
}

