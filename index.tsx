import * as React from 'react';
import * as cx from 'classnames';
import CSSProperties = React.CSSProperties;

interface IProps {
	focus?: boolean;
	onBlur?: (event: any) => void;
	onChange: (value: string, event: any) => void;
	onFocus?: (event: any) => void;
	onInvalid?: (message: string, value: string) => void;
	onKeyDown?: (event: any) => void;
	onKeyUp?: (event: any) => void;
	placeholder?: string;
	style?: CSSProperties;
	valid?: boolean;
	validate?: (value: string) => { isValid: boolean; message: string; };
	value?: string;
}

interface IState {
	valid: boolean;
	invalidMessage: string;
}

class Input extends React.Component<IProps, IState> {
	public state = {
		valid: true,
		invalidMessage: null,
	};

	public static defaultProps: Partial<IProps> = {
		value: '',
	};

	private inputElement;

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

export default Input;
