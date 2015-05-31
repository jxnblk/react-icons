
var React = require('react')

var Range = React.createClass({

  render: function() {
    return (
      <div>
        <label
          htmlFor={this.props.id}
          className="h5 bold block">
          {this.props.label} ({this.props.value})
        </label>
        <input type="range"
          className="col-12 range-light"
          id={this.props.id}
          name={this.props.id}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value}
          onChange={this.props.onChange}
          />
      </div>
    )
  }

})

module.exports = Range

