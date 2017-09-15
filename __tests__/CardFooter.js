// @flow

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardFooter from "../src/components/CardFooter";

it("renders CardFooter correctly", () => {
	const wrapper = shallow(
		<CardFooter>
			Vestibulum mollis elit nec leo venenatis, nec elementum nunc.
		</CardFooter>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders CardFooter correctly with extra styles", () => {
	const wrapper = shallow(
		<CardFooter style={{ color: "white" }}>
			Vestibulum mollis elit nec leo venenatis, nec elementum nunc.
		</CardFooter>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
