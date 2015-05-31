
var React = require('react')
var marked = require('marked')
var highlight = require('highlight.js')
var toJsx = require('react-to-jsx')
var Cog = require('../Cog')

var renderer = new marked.Renderer()

renderer.code = function(code, lang) {
  var hl;
  if (lang.match('jsx:example')) {
    hl = React.renderToStaticMarkup(eval(code))
  } else {
    hl = '<pre>' + highlight.highlight(lang, code).value + '</pre>'
  }
  return hl
}

var Markdown = React.createClass({

  render: function() {
    var html = marked(this.props.children.toString(), { renderer: renderer })
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }

})

module.exports = Markdown

