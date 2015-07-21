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
			let validator = this.props.validate(nextProps.value);

			this.setState({valid: validator.isValid});

			if (!validator.isValid && this.props.onInvalid) {
				this.props.onInvalid(validator.message, nextProps.value);
			}
		}
	},

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.value !== nextProps.value;
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
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
				onKeyUp={this.handleKeyUp}
				placeholder={this.props.placeholder}
				style={this.props.style}
				value={this.props.value} />
		);
	}
});

export default Input;