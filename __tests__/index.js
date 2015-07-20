let componentPath = "../src/index.jsx";

// jest.dontMock("classnames")

// let React = require("react/addons");
import {React} from "react/addons";
import Input from "../src/index.jsx";
let TestUtils = React.TestUtils;


describe("HireForms Input", function() {
	it("Shoul do", function() {
		// var input = TestUtils.renderIntoDocument(
		// 	<Input />
		// );

		expect(TestUtils.isElement(Input));
	})
});