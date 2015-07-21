# Hire Forms Input

React Component representing an input element.

## Value as a property

The `<Input />`s value isn't an internal state, but is
passed as a property! In other words: your app has state and
passes it to the `<Input />`. See the examples.

## Examples

### Default

	render() {
		return (
			<Input
				onChange={this.handleChange.bind(this)}
				placeholder="Enter value..."
				value={this.state.value} />
		);
	}

### With validation

The onInvalid prop isn't required. If a validator function returns `isValid: false` and a message string, the message string will be a TextNode of `<div className="hire-forms-invalid-message" />`.

	let validateNumbersOnly = function(value) {
		// Handle validation.
		let re = /^\d+$/;
		let isValid = re.test(value);

		// Return a validator object.
		return {
			isValid: isValid,
			message: isValid ? "" : "Only numbers are allowed."
		};
	};

...

	handleInvalid(message, value) {

	}

...

	render() {
		return (
			<Input
				onChange={this.handleChange.bind(this)}
				onInvalid={this.handleInvalid.bind(this)}
				placeholder="Enter value..."
				validate={validateNumbersOnly}
				value={this.state.value} />
		);
	}
