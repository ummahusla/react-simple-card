import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "../components/Card";

it("renders Card correctly", () => {
	const wrapper = shallow(
		<Card>Aliquam sodales risus ex, sit amet posuere magna interdum eget.</Card>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});
