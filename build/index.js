(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsInput = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var Input = (function (_React$Component) {
	function Input(props) {
		_classCallCheck(this, Input);

		_get(Object.getPrototypeOf(Input.prototype), "constructor", this).call(this, props);

		this.state = {
			valid: true,
			invalidMessage: null
		};
	}

	_inherits(Input, _React$Component);

	_createClass(Input, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.value === nextProps.value) {
				return;
			}

			if (nextProps.value === "") {
				if (!this.state.valid) {
					this.setState({
						valid: true,
						invalidMessage: null
					});
				}

				return;
			} else if (this.props.validate) {
				var validator = this.props.validate(nextProps.value);

				this.setState({
					valid: validator.isValid,
					invalidMessage: validator.message
				});

				if (!validator.isValid && this.props.onInvalid) {
					this.props.onInvalid(validator.message, nextProps.value);
				}
			}
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.value !== nextProps.value;
		}
	}, {
		key: "handleChange",
		value: function handleChange(ev) {
			this.props.onChange(ev.currentTarget.value, ev);
		}
	}, {
		key: "render",
		value: function render() {
			var invalidMessage = this.state.invalidMessage ? _react2["default"].createElement(
				"div",
				{ className: "hire-forms-invalid-message" },
				this.state.invalidMessage
			) : null;

			return _react2["default"].createElement(
				"div",
				{
					className: (0, _classnames2["default"])("hire-input", { invalid: !this.state.valid }) },
				_react2["default"].createElement("input", {
					onBlur: this.props.onBlur,
					onChange: this.handleChange.bind(this),
					onFocus: this.props.onFocus,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					placeholder: this.props.placeholder,
					style: this.props.style,
					value: this.props.value }),
				invalidMessage
			);
		}
	}]);

	return Input;
})(_react2["default"].Component);

Input.propTypes = {
	onBlur: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func.isRequired,
	onFocus: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	onKeyDown: _react2["default"].PropTypes.func,
	onKeyUp: _react2["default"].PropTypes.func,
	placeholder: _react2["default"].PropTypes.string,
	style: _react2["default"].PropTypes.object,
	valid: _react2["default"].PropTypes.bool,
	validate: _react2["default"].PropTypes.func,
	value: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number])
};

Input.defaultProps = {
	value: ""
};

exports["default"] = Input;
module.exports = exports["default"];

},{"classnames":"classnames","react":"react"}]},{},[1])(1)
});
