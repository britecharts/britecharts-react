import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import DonutComponent from './DonutComponent';
import { donutData } from '../../helpers/testData';

import donut from './donutChart';

Enzyme.configure({ adapter: new Adapter() });

describe('Donut Chart Component', () => {

    describe('render', () => {

        describe('when data is not passed', () => {
            it('should throw an error', () => {
                expect(() => shallow(<DonutComponent />)).toThrow();
            });
        });

        describe('when data passed in', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(donut, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);

                let expected = wrapper.find('.donut-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = donutData.with4Slices();

                mount(<DonutComponent chart={donut} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = donutData.with4Slices();
                let expected = 500;

                mount(
                    <DonutComponent
                        chart={donut}
                        data={dataSet}
                        width={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });

            it('should allow setting height', () => {
                const dataSet = donutData.with4Slices();
                let expected = 500;

                mount(
                    <DonutComponent
                        chart={donut}
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
            let updateSpy;

            beforeEach(() => {
                updateSpy = jest.spyOn(donut, 'update');
            });

            afterEach(() => {
                updateSpy.mockReset();
                updateSpy.mockRestore();
            });

            it('should call the craete method or the chart', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: donutData.with4Slices(),
                });

                let expected = 2;
                let actual = updateSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the crate method', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: donutData.with4Slices(),
                });

                let expected = donutData.with4Slices().length;
                let actual = updateSpy.mock.calls[1][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the createTooltip method', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);
                const expected = 20;

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    width: expected,
                });

                const actual = updateSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('unmount', () => {
        let destroySpy;

        beforeEach(() => {
            destroySpy = jest.spyOn(donut, 'destroy');
        });

        afterEach(() => {
            destroySpy.mockReset();
            destroySpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const wrapper = mount(<DonutComponent chart={donut} data={donutData.with4Slices()} />);

            wrapper.unmount();

            const expected = 1;
            const actual = destroySpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});
