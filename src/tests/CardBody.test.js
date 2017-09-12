// @flow

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardBody from "../components/CardBody";

it("renders CardBody correctly", () => {
	const wrapper = shallow(
		<CardBody>
			Integer euismod sollicitudin massa, non venenatis lectus semper nec.
		</CardBody>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
