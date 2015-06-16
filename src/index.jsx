import React from "react";
import cx from "classnames";

let Input = React.createClass({
	propTypes: {
		onChange: React.PropTypes.func,
		onInvalid: React.PropTypes.func,
		onKeyDown: React.PropTypes.func,
		onKeyUp: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		style: React.PropTypes.object,
		valid: React.PropTypes.bool,
		validate: React.PropTypes.func,
		value: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		])
	},

	getDefaultProps() {
		return {
			value: ""
		};
	},

	getInitialState() {
		return {
			focus: false,
			valid: true
		};
	},

	componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) {
			return;
		}

		if (nextProps.value === "") {
			if (!this.state.valid) {
				this.setState({valid: true});
			}

			return;
		}

		if (this.props.validate) {
			let valid = this.props.validate(nextProps.value);

			this.setState({valid: valid});

			if (!valid && this.props.onInvalid) {
				this.props.onInvalid(nextProps.value);
			}
		}
	},

	shouldComponentUpdate(nextProps, nextState) {
		let propsValueChange = this.props.value !== nextProps.value;
		let stateFocusChange = this.state.focus !== nextState.focus;

		return propsValueChange || stateFocusChange;
	},

	toggleFocus() {
		this.setState({focus: !this.state.focus});
	},

	handleKeyDown(ev) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(ev);
		}
	},

	handleKeyUp(ev) {
		if (this.props.onKeyUp) {
			this.props.onKeyUp(ev);
		}
	},

	handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	},

	render() {
		return (
			<input
				className={cx(
					"hire-input",
					{invalid: !this.state.valid}
				)}
				onBlur={this.toggleFocus}
				onChange={this.handleChange}
				onFocus={this.toggleFocus}
				onKeyDown={this.handleKeyDown}
				onKeyUp={this.handleKeyUp}
				placeholder={this.props.placeholder}
				style={this.props.style}
				value={this.props.value} />
		);
	}
});

export default Input;