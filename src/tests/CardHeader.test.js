// @flow

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardFooter from "../components/CardFooter";

it("renders CardFooter correctly", () => {
	const wrapper = shallow(
		<CardFooter>
			Quisque eget maximus tortor. Donec tortor est, placerat quis.
		</CardFooter>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
