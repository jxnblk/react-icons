
var React = require('react')
var Cog = require('../Cog')
var Range = require('./Range.jsx')

var Demo = React.createClass({

  getInitialState: function() {
    return {
      teeth: 8,
      d2: .6875,
      d3: .375,
      splay: .375,
    }
  },

  handleChange: function(e) {
    var name = e.target.name
    var state = this.state
    state[name] = e.target.value
    console.log(name, state[name])
    this.setState(state)
  },

  render: function() {
    var teeth = this.state.teeth
    var d2 = this.state.d2
    var d3 = this.state.d3
    var splay = this.state.splay
    return (
      <div>
        <div className="center mb2">
          <Cog
            size={512}
            teeth={teeth}
            d2={d2}
            d3={d3}
            splay={splay}
            />
        </div>
        <div className="md-flex mxn2">
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
      </div>
    )
  }

})

module.exports = Demo

