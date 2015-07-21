jest.dontMock("../src/index.jsx");

import React from "react/addons";
let {TestUtils} = React.addons;
import Input from "../src/index.jsx";


describe("HireForms Input", function() {
	it("Shoul do", function() {
		let Output = {};

		expect(TestUtils.isElement(<Input />)).toBeTruthy();
	})
});