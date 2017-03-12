"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            valid: true,
            invalidMessage: null,
        };
        this.handleChange = (ev) => this.props.onChange(ev.currentTarget.value, ev);
    }
    componentDidMount() {
        if (this.props.focus)
            this.inputElement.focus();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.value === nextProps.value)
            return;
        if (nextProps.value === '') {
            if (!this.state.valid) {
                this.setState({
                    valid: true,
                    invalidMessage: null,
                });
            }
            return;
        }
        else if (this.props.validate) {
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
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
    render() {
        let invalidMessage = this.state.invalidMessage ?
            React.createElement("div", { className: "hire-forms-invalid-message" }, this.state.invalidMessage) :
            null;
        return (React.createElement("div", { className: cx('hire-input', { invalid: !this.state.valid }) },
            React.createElement("input", { onBlur: this.props.onBlur, onChange: this.handleChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, placeholder: this.props.placeholder, ref: (el) => { this.inputElement = el; }, style: this.props.style, value: this.props.value }),
            invalidMessage));
    }
}
Input.defaultProps = {
    value: '',
};
exports.default = Input;
