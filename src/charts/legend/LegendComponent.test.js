import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Legend from './LegendComponent';

test('loads stuff', () => {
    const wrapper = mount(<Legend />);

    let expected = 'hello legend';
    let actual = wrapper.text();

    expect(actual).toEqual(expected);
});
