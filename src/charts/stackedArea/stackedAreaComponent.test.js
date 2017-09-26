import React from 'react';
import { shallow, mount, render } from 'enzyme';

import StackedArea from './StackedAreaComponent';

const dummyData = () => [
    {
        'name': 'Direct',
        'value': 0,
        'date': '2011-01-05T00:00:00'
    },
    {
        'name': 'Direct',
        'value': 10,
        'date': '2011-01-06T00:00:00'
    },
    {
        'name': 'Direct',
        'value': 7,
        'date': '2011-01-07T00:00:00'
    },
    {
        'name': 'Direct',
        'value': 6,
        'date': '2011-01-08T00:00:00'
    },
    {
        'name': 'Eventbrite',
        'value': 3,
        'date': '2011-01-05T00:00:00'
    },
    {
        'name': 'Eventbrite',
        'value': 16,
        'date': '2011-01-06T00:00:00'
    },
    {
        'name': 'Eventbrite',
        'value': 10,
        'date': '2011-01-07T00:00:00'
    },
    {
        'name': 'Eventbrite',
        'value': 0,
        'date': '2011-01-08T00:00:00'
    },
    {
        'name': 'Email',
        'value': 10,
        'date': '2011-01-05T00:00:00'
    },
    {
        'name': 'Email',
        'value': 15,
        'date': '2011-01-06T00:00:00'
    },
    {
        'name': 'Email',
        'value': 3,
        'date': '2011-01-07T00:00:00'
    },
    {
        'name': 'Email',
        'value': 33,
        'date': '2011-01-08T00:00:00'
    }
];


describe('Stacked Area Chart', () => {

    describe('render', () => {

        it('should render the chart container', () => {
            const wrapper = render(<StackedArea />);

            let expected = 1;
            let actual = wrapper.find('.stacked-area-container').length;

            expect(actual).toEqual(expected);
        });

        it('should render a basic chart with data', () => {
            const wrapper = render(<StackedArea data={dummyData()} />);

            let expected = 1;
            let actual = wrapper.find('.stacked-area').length;

            expect(actual).toEqual(expected);
        });
    });
});

