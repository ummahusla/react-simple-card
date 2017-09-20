// @flow

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "../src/components/Card";

it("renders Card correctly with default styles", () => {
	const wrapper = shallow(
		<Card>Aliquam sodales risus ex, sit amet posuere magna interdum eget.</Card>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders Card correctly with extra styles", () => {
	const wrapper = shallow(
		<Card style={{ minHeight: "100px" }}>
			Aliquam sodales risus ex, sit amet posuere magna interdum eget.
		</Card>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders Card correctly with black background color", () => {
	const wrapper = shallow(
		<Card bgColor="#000">
			Aliquam sodales risus ex, sit amet posuere magna interdum eget.
		</Card>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders Card correctly with blue font style", () => {
	const wrapper = shallow(
		<Card fontColor="blue">
			Aliquam sodales risus ex, sit amet posuere magna interdum eget.
		</Card>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
