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
                mount(<DonutComponent chart={donut} data={donutData()} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData()} />);

                let expected = wrapper.find('.stacked-area-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = donutData();

                mount(<DonutComponent chart={donut} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = donutData();
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
                const dataSet = donutData();
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
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(donut, 'craete');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the craete method or the chart', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: donutData.with2Sources(),
                });

                let expected = 2;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the crate method', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData()} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: donutData.with2Sources(),
                });

                let expected = donutData.with2Sources().length;
                let actual = createSpy.mock.calls[1][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the createTooltip method', () => {
                const wrapper = mount(<DonutComponent chart={donut} data={donutData()} />);
                const expected = 20;

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    width: expected,
                });

                const actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('unmount', () => {
        let createSpy;

        beforeEach(() => {
            createSpy = jest.spyOn(donut, 'destroy');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        fit('should call the destroy method or the chart', () => {
            const wrapper = mount(<DonutComponent chart={donut} data={donutData()} />);

            wrapper.unmount();

            const expected = 1;
            const actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});
