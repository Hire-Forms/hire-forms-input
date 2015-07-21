jest.dontMock("classnames");
jest.dontMock("../src/index.jsx");

import React from "react/addons";
let {TestUtils} = React.addons;
import Input from "../src/index.jsx";


describe("HireForms Input", function() {
	it("Should be a ReactElement", function() {
		expect(TestUtils.isElement(<Input />)).toBeTruthy();
	});

	it("Should transfer value property to input value", function() {
		let component = TestUtils.renderIntoDocument(
			<Input value="my value" />
		);

		let input = TestUtils.findRenderedDOMComponentWithTag(component, "input");
		console.log(input);

		expect(TestUtils.isElement(<Input />)).toBeTruthy();
	});
});