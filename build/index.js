"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = _react2["default"].createClass({
	displayName: "Input",

	propTypes: {
		onChange: _react2["default"].PropTypes.func,
		onInvalid: _react2["default"].PropTypes.func,
		onKeyDown: _react2["default"].PropTypes.func,
		onKeyUp: _react2["default"].PropTypes.func,
		placeholder: _react2["default"].PropTypes.string,
		style: _react2["default"].PropTypes.object,
		valid: _react2["default"].PropTypes.bool,
		validate: _react2["default"].PropTypes.func,
		value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: ""
		};
	},

	getInitialState: function getInitialState() {
		return {
			focus: false,
			valid: true
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === "") {
			if (!this.state.valid) {
				this.setState({ valid: true });
			}

			return;
		}

		if (this.props.validate) {
			var valid = this.props.validate(nextProps.value);

			this.setState({ valid: valid });

			if (!valid && this.props.onInvalid) {
				this.props.onInvalid(nextProps.value);
			}
		}
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		var propsValueChange = this.props.value !== nextProps.value;
		var stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	},

	toggleFocus: function toggleFocus() {
		this.setState({ focus: !this.state.focus });
	},

	handleKeyDown: function handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	},

	handleKeyUp: function handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	},

	handleChange: function handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	},

	render: function render() {
		return _react2["default"].createElement("input", {
			className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }),
			onBlur: this.toggleFocus,
			onChange: this.handleChange,
			onFocus: this.toggleFocus,
			onKeyDown: this.handleKeyDown,
			onKeyUp: this.handleKeyUp,
			placeholder: this.props.placeholder,
			style: this.props.style,
			value: this.props.value });
	}
});

exports["default"] = Input;
module.exports = exports["default"];
