import React, { PropTypes } from 'react';
import cx from 'classnames';

class Input extends React.Component {
	state = {
		valid: true,
		invalidMessage: null,
	}

	componentDidMount() {
		if (this.props.focus) this.inputElement.focus();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.value === nextProps.value) return;

		if (nextProps.value === '') {
			if (!this.state.valid) {
				this.setState({
					valid: true,
					invalidMessage: null,
				});
			}

			return;
		} else if (this.props.validate) {
			const validator = this.props.validate(nextProps.value);

			this.setState({
				valid: validator.isValid,
				invalidMessage: validator.message,
			});

			if (!validator.isValid && this.props.onInvalid) {
				this.props.onInvalid(validator.message, nextProps.value);
			}
		}
	}

	shouldComponentUpdate(nextProps, /* nextState */) {
		return this.props.value !== nextProps.value;
	}

	handleChange = (ev) =>
		this.props.onChange(ev.currentTarget.value, ev);

	render() {
		let invalidMessage = this.state.invalidMessage ?
			<div className="hire-forms-invalid-message">{this.state.invalidMessage}</div> :
			null;

		return (
			<div
				className={cx(
					'hire-input',
					{ invalid: !this.state.valid }
				)}
			>
				<input
					onBlur={this.props.onBlur}
					onChange={this.handleChange}
					onFocus={this.props.onFocus}
					onKeyDown={this.props.onKeyDown}
					onKeyUp={this.props.onKeyUp}
					placeholder={this.props.placeholder}
					ref={(el) => { this.inputElement = el; }}
					style={this.props.style}
					value={this.props.value}
				/>
				{invalidMessage}
			</div>
		);
	}
}

Input.propTypes = {
	focus: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	onFocus: PropTypes.func,
	onInvalid: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	valid: PropTypes.bool,
	validate: PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

Input.defaultProps = {
	value: '',
};

export default Input;
