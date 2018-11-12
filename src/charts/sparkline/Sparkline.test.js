import React from 'react';
import { shallow, mount } from 'enzyme';

import Sparkline from './Sparkline';
import sparklineData from './sparklineChart.fixtures';

import sparkline from './sparklineChart';

describe('Sparkline Chart', () => {

    describe('render', () => {

        describe('when data passed in', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(sparkline, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                const dataSet = sparklineData.with1Source();

                mount(<Sparkline chart={sparkline} data={dataSet} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const dataSet = sparklineData.with1Source();

                const wrapper = mount(<Sparkline chart={sparkline} data={dataSet} />);

                let expected = wrapper.find('.sparkline-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = sparklineData.with1Source();

                mount(<Sparkline chart={sparkline} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = sparklineData.with1Source();
                let expected = 500;

                mount(
                    <Sparkline
                        chart={sparkline}
                        data={dataSet}
                        width={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });

            it('should allow setting height', () => {
                const dataSet = sparklineData.with1Source();
                let expected = 500;

                mount(
                    <Sparkline
                        chart={sparkline}
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
                updateSpy = jest.spyOn(sparkline, 'update');
            });

            afterEach(() => {
                updateSpy.mockReset();
                updateSpy.mockRestore();
            });

            it('should call the update method or the chart', () => {
                const dataSet = sparklineData.with1Source();
                const wrapper = mount(<Sparkline chart={sparkline} data={dataSet} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: sparklineData.withLowValues(),
                });

                let expected = 1;
                let actual = updateSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the update method', () => {
                const dataSet = sparklineData.with1Source();
                const wrapper = mount(<Sparkline chart={sparkline} data={dataSet} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: sparklineData.withLowValues(),
                });

                let expected = sparklineData.withLowValues().length;
                let actual = updateSpy.mock.calls[0][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the update method', () => {
                const dataSet = sparklineData.with1Source();
                const wrapper = mount(<Sparkline chart={sparkline} data={dataSet} />);
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
        let createSpy;

        beforeEach(() => {
            createSpy = jest.spyOn(sparkline, 'destroy');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const dataSet = sparklineData.with1Source();
            const wrapper = mount(<Sparkline chart={sparkline} data={dataSet} />);

            wrapper.unmount();

            let expected = 1;
            let actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});

