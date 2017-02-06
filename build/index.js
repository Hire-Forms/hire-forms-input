'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Input);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			valid: true,
			invalidMessage: null
		}, _this.handleChange = function (ev) {
			return _this.props.onChange(ev.currentTarget.value, ev);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Input, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.focus) this.inputElement.focus();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.value === nextProps.value) return;

			if (nextProps.value === '') {
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
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) /* nextState */{
			return this.props.value !== nextProps.value;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var invalidMessage = this.state.invalidMessage ? _react2.default.createElement(
				'div',
				{ className: 'hire-forms-invalid-message' },
				this.state.invalidMessage
			) : null;

			return _react2.default.createElement(
				'div',
				{
					className: (0, _classnames2.default)('hire-input', { invalid: !this.state.valid })
				},
				_react2.default.createElement('input', {
					onBlur: this.props.onBlur,
					onChange: this.handleChange,
					onFocus: this.props.onFocus,
					onKeyDown: this.props.onKeyDown,
					onKeyUp: this.props.onKeyUp,
					placeholder: this.props.placeholder,
					ref: function ref(el) {
						_this2.inputElement = el;
					},
					style: this.props.style,
					value: this.props.value
				}),
				invalidMessage
			);
		}
	}]);

	return Input;
}(_react2.default.Component);

Input.propTypes = {
	focus: _react.PropTypes.bool,
	onBlur: _react.PropTypes.func,
	onChange: _react.PropTypes.func.isRequired,
	onFocus: _react.PropTypes.func,
	onInvalid: _react.PropTypes.func,
	onKeyDown: _react.PropTypes.func,
	onKeyUp: _react.PropTypes.func,
	placeholder: _react.PropTypes.string,
	style: _react.PropTypes.object,
	valid: _react.PropTypes.bool,
	validate: _react.PropTypes.func,
	value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

Input.defaultProps = {
	value: ''
};

exports.default = Input;