// @flow

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ImageHeader from "../src/components/ImageHeader";

it("renders ImageHeader correctly", () => {
	const wrapper = shallow(
		<ImageHeader imageSrc="http://via.placeholder.com/350x200" />
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
