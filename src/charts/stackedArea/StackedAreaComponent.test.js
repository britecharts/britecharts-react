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
                expect(() => shallow(<StackedAreaComponent data={[]} />)).toThrow();
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

    describe('update', () => {

        describe('when data changes', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(stackedArea, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                const wrapper = mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: stackedAreaData.with2Sources(),
                });

                let expected = 2;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the create method', () => {
                const wrapper = mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: stackedAreaData.with2Sources(),
                });

                let expected = stackedAreaData.with2Sources().length;
                let actual = createSpy.mock.calls[1][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the create method', () => {
                const wrapper = mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);
                const expected = 20;

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    width: expected,
                });

                let actual = createSpy.mock.calls[1][2].width;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('unmount', () => {
        let createSpy;

        beforeEach(() => {
            createSpy = jest.spyOn(stackedArea, 'destroy');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const wrapper = mount(<StackedAreaComponent chart={stackedArea} data={stackedAreaData.with3Sources()} />);

            wrapper.unmount();

            let expected = 1;
            let actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });

    describe('lifetime', () => {

        xdescribe('when mouse hover', () => {
            let mockFn;

            beforeEach(() => {
                mockFn = jest.fn();
            });

            afterEach(() => {
                mockFn.mockReset();
                mockFn.mockRestore();
            });

            it('should call the mouse over function', () => {
                let wrapper = mount(<StackedAreaComponent customMouseOver={mockFn} chart={stackedArea} data={stackedAreaData.with3Sources()} />);

                let expected = 1;
                let actual = mockFn.mock.calls.length;

                expect(actual).toEqual(expected);
            });
        });
    });
});

