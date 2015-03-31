
var React = require('react');
var classnames = require('classnames');
var controllable = require('react-controllables');

var NumberRange = React.createClass({displayName: "NumberRange",

  propTypes: {
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    onValueChange: React.PropTypes.func,
    step: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    rangeLabels: React.PropTypes.bool,
    color: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      label: '',
      value: 0,
      step: 1,
      color: 'blue'
    }
  },

  handleChange: function(e) {
    if (!this.props.onValueChange || this.props.readonly) return;
    var value = parseInt(e.target.value, 10);
    this.props.onValueChange(value);
  },


  render: function() {
    var styles = {
      numberInput: {
        border: 0,
        backgroundColor: 'transparent',
        padding: 0,
        height: '1.5rem',
      },
      range: {
        opacity: this.props.disabled ? 0.5 : 1
      }
    };
    var rangeLabels = this.props.rangeLabels ? (
        React.createElement("div", {className: "h6 flex flex-baseline"}, 
          React.createElement("div", null, this.props.min || 0), 
          React.createElement("div", {className: "flex-auto"}), 
          React.createElement("div", null, this.props.max || 100)
        )
    ) : false;
    return (
      React.createElement("div", {className: this.props.className}, 
        React.createElement("div", {className: "flex flex-baseline"}, 
          React.createElement("label", {htmlFor: this.props.id, className: "h5 bold flex-auto"}, this.props.label), 
          React.createElement("input", {type: "number", 
            id: this.props.id, 
            value: this.props.value, 
            onChange: this.handleChange, 
            min: this.props.min, 
            max: this.props.max, 
            step: this.props.step, 
            name: this.props.name, 
            disabled: this.props.disabled, 
            readOnly: this.props.readOnly, 
            required: this.props.required, 
            placeholder: this.props.placeholder, 
            className: "bold m0 field-small right-align field-light", 
            style: styles.numberInput})
        ), 
        React.createElement("input", {type: "range", 
          value: this.props.value, 
          onChange: this.handleChange, 
          min: this.props.min, 
          max: this.props.max, 
          step: this.props.step, 
          disabled: this.props.disabled, 
          required: this.props.required, 
          readOnly: this.props.readOnly, 
          className: "full-width m0 range-light", 
          style: styles.range}
          ), 
        rangeLabels
      )
    )
  }

});

module.exports = controllable(NumberRange, ['value']);

