import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import TooltipComponent from './TooltipComponent';
import tooltip from './tooltipChart';

Enzyme.configure({ adapter: new Adapter() });

const FakeChart = () => (
    <div className="metadata-group">
        <div className="vertical-marker-container" />
    </div>
);

describe('Tooltip Component', () => {

    describe('render', () => {
        let createSpy;

        beforeEach(() => {
            createSpy = jest.spyOn(tooltip, 'create');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        it('should call the create method of the chart', () => {
            mount(
                <TooltipComponent chart={tooltip}>
                    <FakeChart />
                </TooltipComponent>
            );

            let expected = 1;
            let actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });

        it('should call the create method or the chart with the container as the first argument', () => {
            const wrapper = mount(
                <TooltipComponent chart={tooltip}>
                    <FakeChart />
                </TooltipComponent>
            );

            let expected = wrapper.find('.vertical-marker-container').instance();
            let actual = createSpy.mock.calls[0][0];

            expect(actual).toEqual(expected);
        });

        it('should allow setting locale', () => {
            let expected = 'en-US';

            mount(
                <TooltipComponent chart={tooltip} locale={expected}>
                    <FakeChart />
                </TooltipComponent>
            );

            let actual = createSpy.mock.calls[0][1].locale;

            expect(actual).toEqual(expected);
        });

        it('should allow setting title', () => {
            let expected = 'title';

            mount(
                <TooltipComponent chart={tooltip} title={expected}>
                    <FakeChart />
                </TooltipComponent>
            );

            let actual = createSpy.mock.calls[0][1].title;

            expect(actual).toEqual(expected);
        });
    });

    describe('update', () => {

        describe('when data changes', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn(tooltip, 'update');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the update method or the chart', () => {
                const wrapper = mount(
                    <TooltipComponent chart={tooltip}>
                        <FakeChart />
                    </TooltipComponent>
                );

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    title: 'DummyTitle',
                });

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the update method', () => {
                const wrapper = mount(
                    <TooltipComponent chart={tooltip}>
                        <FakeChart />
                    </TooltipComponent>
                );
                const expected = 'title';

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    title: expected,
                });

                let actual = createSpy.mock.calls[0][1].title;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new state to the update method', () => {
                const wrapper = mount(
                    <TooltipComponent chart={tooltip}>
                        <FakeChart />
                    </TooltipComponent>
                );
                let expected = true;

                // Changing properties should trigger a componentDidUpdate
                wrapper.setState({
                    isActive: expected,
                });

                let actual = createSpy.mock.calls[0][2].isActive;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('unmount', () => {
        let createSpy;

        beforeEach(() => {
            createSpy = jest.spyOn(tooltip, 'destroy');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const wrapper = mount(
                <TooltipComponent chart={tooltip}>
                    <FakeChart />
                </TooltipComponent>
            );

            wrapper.unmount();

            let expected = 1;
            let actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});
