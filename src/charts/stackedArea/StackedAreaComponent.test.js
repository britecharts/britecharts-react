import React from 'react';
import { shallow, mount, render } from 'enzyme';

import StackedAreaComponent from './StackedAreaComponent';
import { stackedAreaData } from '../../helpers/testData';

describe('Stacked Area Chart', () => {

    describe('render', () => {

        it('should render the chart container', () => {
            const wrapper = render(<StackedAreaComponent />);

            let expected = 1;
            let actual = wrapper.find('.stacked-area-container').length;

            expect(actual).toEqual(expected);
        });

        it('should render a basic chart with data', () => {
            const wrapper = mount(<StackedAreaComponent data={stackedAreaData.with3Sources()} />);

            let expected = 1;
            let actual = wrapper.find('.stacked-area').length;

            expect(actual).toEqual(expected);
        });
    });
});

