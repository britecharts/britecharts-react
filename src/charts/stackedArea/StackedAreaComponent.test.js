import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import StackedAreaComponent from './StackedAreaComponent';
import { stackedAreaData } from '../../helpers/testData';

import stackedArea from './stackedAreaChart';

Enzyme.configure({ adapter: new Adapter() });

describe('Stacked Area Chart Component', () => {

    describe('render', () => {

        describe('when data is not passed', () => {
            it('should throw an error', () => {
                expect(() => shallow(<StackedAreaComponent />)).toThrow();
            });
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

                let expected = wrapper.find('.stacked-area-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = stackedAreaData.with3Sources();

                mount(<StackedAreaComponent chart={stackedArea} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = stackedAreaData.with3Sources();
                let expected = 500;

                mount(
                    <StackedAreaComponent
                        chart={stackedArea}
                        data={dataSet}
                        width={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });

            it('should allow setting height', () => {
                const dataSet = stackedAreaData.with3Sources();
                let expected = 500;

                mount(
                    <StackedAreaComponent
                        chart={stackedArea}
                        data={dataSet}
                        height={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].height;

                expect(actual).toEqual(expected);
            });
        });
    });
});

