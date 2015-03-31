
var React = require('react');

var NumberRange = require('../number-range');

var Root = React.createClass({

  getInitialState: function() {
    return {
      hamburgers: 0,
      hotdogs: 0
    }
  },

  handleHamburgerChange: function(val) {
    this.setState({ hamburgers: val });
  },

  handleHotdogChange: function(val) {
    this.setState({ hotdogs: val });
  },

  render: function() {
    return (
      <div className="p3">
        <h1>Rebass NumberRange Demo</h1>
        <h2>
          Hamburgers: {this.state.hamburgers}
          {' · '}
          Hotdogs: {this.state.hotdogs}
        </h2>
        <div className="flex flex-wrap mxn2">
          <div className="col-12 sm-col-5 px2 mb3">
            <NumberRange
              id="hamburgers-number-range"
              label="Hamburgers"
              value={this.state.hamburgers}
              onValueChange={this.handleHamburgerChange} />
          </div>
          <div className="flex-auto" />
          <div className="col-12 sm-col-5 px2 mb3">
            <NumberRange
              id="hamburgers-with-labels"
              label="Hamburgers (with range labels)"
              value={this.state.hamburgers}
              rangeLabels
              onValueChange={this.handleHamburgerChange} />
          </div>
          <div className="col-12 sm-col-5 px2 mb3">
            <NumberRange
              id="hotdogs-number-range"
              label="Hotdogs (step 5, max 50)"
              step={5}
              max={50}
              value={this.state.hotdogs}
              onValueChange={this.handleHotdogChange} />
          </div>
          <div className="flex-auto" />
          <div className="col-12 sm-col-5 px2 mb3">
            <NumberRange
              id="hotdogs-number-range-disabled"
              label="Hotdogs (disabled)"
              step={5}
              max={50}
              value={this.state.hotdogs}
              disabled
              onValueChange={this.handleHotdogChange} />
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Root;

