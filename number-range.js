
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
        padding: 0
      }
    };
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
          className: "full-width range-light"}
          )
      )
    )
  }

});

module.exports = controllable(NumberRange, ['value']);

