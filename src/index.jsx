import React from "react";
import cx from "classnames";

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			valid: true,
			invalidMessage: null
		};
	}

	componentWillReceiveProps(nextProps) {
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
			let validator = this.props.validate(nextProps.value);

			this.setState({
				valid: validator.isValid,
				invalidMessage: validator.message
			});

			if (!validator.isValid && this.props.onInvalid) {
				this.props.onInvalid(validator.message, nextProps.value);
			}
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.value !== nextProps.value;
	}

	handleChange(ev) {
		this.props.onChange(ev.currentTarget.value, ev);
	}

	render() {
		let invalidMessage = this.state.invalidMessage ?
			<div className="hire-forms-invalid-message">{this.state.invalidMessage}</div> :
			null;

		return (
			<div
				className={cx(
					"hire-input",
					{invalid: !this.state.valid}
				)}>
				<input
					onBlur={this.props.onBlur}
					onChange={this.handleChange.bind(this)}
					onFocus={this.props.onFocus}
					onKeyDown={this.props.onKeyDown}
					onKeyUp={this.props.onKeyUp}
					placeholder={this.props.placeholder}
					style={this.props.style}
					value={this.props.value} />
				{invalidMessage}
			</div>
		);
	}
}

Input.propTypes = {
	onBlur: React.PropTypes.func,
	onChange: React.PropTypes.func.isRequired,
	onFocus: React.PropTypes.func,
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
};

Input.defaultProps = {
	value: ""
};

export default Input;