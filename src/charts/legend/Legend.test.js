import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Legend from './Legend';
import legendData from './legendChart.fixtures';

import legendChart from './legendChart';

Enzyme.configure({ adapter: new Adapter() });

describe('Legend Chart', () => {

    describe('render', () => {

        describe('when data passed in', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(legendChart, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                mount(<Legend chart={legendChart} data={legendData.with6Points()} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const wrapper = mount(<Legend chart={legendChart} data={legendData.with6Points()} />);

                let expected = wrapper.find('.legend-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = legendData.with6Points();

                mount(<Legend chart={legendChart} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = legendData.with6Points();
                let expected = 500;

                mount(
                    <Legend
                        chart={legendChart}
                        data={dataSet}
                        width={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });

            it('should allow setting height', () => {
                const dataSet = legendData.with6Points();
                let expected = 500;

                mount(
                    <Legend
                        chart={legendChart}
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
                updateSpy = jest.spyOn(legendChart, 'update');
            });

            afterEach(() => {
                updateSpy.mockReset();
                updateSpy.mockRestore();
            });

            it('should call the update method or the chart', () => {
                const wrapper = mount(<Legend chart={legendChart} data={legendData.with6Points()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: legendData.with6Points(),
                });

                let expected = 1;
                let actual = updateSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the update method', () => {
                const wrapper = mount(<Legend chart={legendChart} data={legendData.with6Points()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: legendData.with6Points(),
                });

                let expected = legendData.with6Points().length;
                let actual = updateSpy.mock.calls[0][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the update method', () => {
                const wrapper = mount(<Legend chart={legendChart} data={legendData.with6Points()} />);
                const expected = 20;

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    width: expected,
                });

                let actual = updateSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('unmount', () => {
        let destroySpy;

        beforeEach(() => {
            destroySpy = jest.spyOn(legendChart, 'destroy');
        });

        afterEach(() => {
            destroySpy.mockReset();
            destroySpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const wrapper = mount(<Legend chart={legendChart} data={legendData.with6Points()} />);

            wrapper.unmount();

            let expected = 1;
            let actual = destroySpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});

