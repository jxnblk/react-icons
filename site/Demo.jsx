
var React = require('react')
var highlight = require('highlight.js')
var Cog = require('../Cog')
var Range = require('./Range.jsx')
var beautify = require('js-beautify').html

var Demo = React.createClass({

  getInitialState: function() {
    return {
      teeth: 8,
      d2: .6875,
      d3: .375,
      splay: .375,
      showGuidelines: false,
    }
  },

  handleChange: function(e) {
    var name = e.target.name
    var state = this.state
    state[name] = e.target.value
    this.setState(state)
  },

  toggleGuidelines: function() {
    var showGuidelines = !this.state.showGuidelines
    this.setState({ showGuidelines: showGuidelines })
  },

  render: function() {

    var teeth = this.state.teeth
    var d2 = this.state.d2
    var d3 = this.state.d3
    var splay = this.state.splay

    var svg = React.renderToStaticMarkup(<Cog {...this.state} />)
    svg = beautify(svg, { indent_size: 2 })
    var code = highlight.highlight('xml', svg).value

    return (
      <div>
        <div className="center mb2">
          <Cog {...this.state}
            size={512} />
        </div>
        <div className="md-flex mb2 mxn2">
          <div className="md-col-3 px2">
            <Range id="teeth"
              label="Teeth"
              min={3}
              max={24}
              value={teeth}
              onChange={this.handleChange} />
          </div>
          <div className="md-col-3 px2">
            <Range id="d2"
              label="Diameter 2"
              min={.25}
              max={1}
              step={.03125}
              value={d2}
              onChange={this.handleChange} />
          </div>
          <div className="md-col-3 px2">
            <Range id="d3"
              label="Diameter 3"
              min={0}
              max={.75}
              step={.03125}
              value={d3}
              onChange={this.handleChange} />
          </div>
          <div className="md-col-3 px2">
            <Range id="splay"
              label="Splay"
              min={0}
              max={1}
              step={.03125}
              value={splay}
              onChange={this.handleChange} />
          </div>
        </div>
        <div>
          <button
            onClick={this.toggleGuidelines}
            className="btn btn-outline blue">
            {this.state.showGuidelines ? 'Hide Guidelines' : 'Show Guidelines'}
          </button>
        </div>
        <div>
          <h3 className="h5">SVG Code</h3>
          <pre dangerouslySetInnerHTML={{ __html: code }} />
        </div>
      </div>
    )
  }

})

module.exports = Demo

