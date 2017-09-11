/// <reference types="react" />
import * as React from 'react';
import CSSProperties = React.CSSProperties;
export interface IProps {
    className?: string;
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
    validate?: (value: string) => {
        isValid: boolean;
        message?: string;
    };
    value?: string;
}
export interface IState {
    valid: boolean;
    invalidMessage: string;
}
declare class Input extends React.Component<IProps, IState> {
    state: {
        valid: boolean;
        invalidMessage: any;
    };
    static defaultProps: Partial<IProps>;
    private inputElement;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(nextProps: any): boolean;
    handleChange: (ev: any) => void;
    render(): JSX.Element;
}
export default Input;
