import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CardBody from './';

it('renders CardBody correctly', () => {
    const wrapper = shallow(
        <CardBody>Integer euismod sollicitudin massa, non venenatis lectus semper nec.</CardBody>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders CardBody correctly with extra styles', () => {
    const wrapper = shallow(
        <CardBody style={{ color: 'red' }}>
            Integer euismod sollicitudin massa, non venenatis lectus semper nec.
        </CardBody>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
