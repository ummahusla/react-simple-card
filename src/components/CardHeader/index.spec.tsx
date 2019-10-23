import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CardHeader from './';

it('renders CardHeader correctly', () => {
    const wrapper = shallow(
        <CardHeader>Quisque eget maximus tortor. Donec tortor est, placerat quis.</CardHeader>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders CardHeader correctly with extra styles', () => {
    const wrapper = shallow(
        <CardHeader style={{ backgroundColor: 'green' }}>
            Quisque eget maximus tortor. Donec tortor est, placerat quis.
        </CardHeader>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
