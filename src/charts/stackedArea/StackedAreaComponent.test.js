import React from 'react';
import { shallow, mount } from 'enzyme';

import StackedAreaComponent from './StackedAreaComponent';
import { stackedAreaData } from '../../helpers/testData';

import stackedArea from './stackedAreaChart';

describe('Stacked Area Chart', () => {

    describe('render', () => {

        it('should render the chart container', () => {
            const wrapper = shallow(<StackedAreaComponent />);

            let expected = 1;
            let actual = wrapper.find('.stacked-area-container').length;

            expect(actual).toEqual(expected);
        });

        describe('when data passed in', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(stackedArea, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const wrapper = mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);

                let expected = wrapper.node._rootNode;
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = stackedAreaData.with3Sources();

                mount(<StackedAreaComponent chart={stackedArea} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1].data;

                expect(actualData).toEqual(expectedData);
            });
        });
    });
});

