import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ImageHeader from './';

it('renders ImageHeader correctly', () => {
    const wrapper = shallow(
        <ImageHeader alt="Alt text for the image" imageSrc="http://via.placeholder.com/350x200" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders ImageHeader correctly with className and extra styles', () => {
    const wrapper = shallow(
        <ImageHeader
            className="image-wrapper"
            style={{ padding: '3px' }}
            alt="Alt text for the image"
            imageSrc="http://via.placeholder.com/350x200"
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
