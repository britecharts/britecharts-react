import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Legend from './LegendComponent';

test('loads stuff', () => {
    const wrapper = render(<Legend />);

    let expected = true;
    let actual = wrapper.contains('legend');

    expect(actual).toEqual(expected);
});
