import React from 'react';
import { shallow, mount } from 'enzyme';

import LoadingContainer from './LoadingContainer';

import barData from '../bar/barChart.fixtures';
import bar from '../bar/barChart';

describe('Loading Container', () => {

    it('should render without errors', () => {
        expect(() => (
            mount(
                <LoadingContainer
                    data={barData}
                    loadingState={'.load-state'}
                >
                    <div className="chart" />
                </LoadingContainer>
            )
        ).unmount()).not.toThrow();
    });

    describe('Loading States', () => {

        describe('when data is not null', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = mount(
                    <LoadingContainer
                        data={barData}
                        loadingState={'.load-state'}
                    >
                        <div className="chart" />
                    </LoadingContainer>
                );
            });

            it('should not show the loadingState after mounting', () => {
                let expected = false;
                let actual = wrapper.html().indexOf('load-state') > -1;

                expect(actual).toEqual(expected);

                wrapper.unmount();
            });

        });

        describe('when shouldShowLoadingState is passed', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = shallow(
                    <LoadingContainer
                        data={null}
                        loadingState={bar.loading()}
                        shouldShowLoadingState={true}
                    >
                        <div className="chart" />
                    </LoadingContainer>
                );
            });

            it('should render the loading state', () => {
                let expected = true;
                let actual = wrapper.html().indexOf('load-state') > -1;

                expect(actual).toEqual(expected);

                wrapper.unmount();
            });

            it ('should include the loading class on the chart', () => {
                let expected = 'display:none;';

                let childContainer = wrapper.find('.loading-container__children');

                let actual = childContainer.html().match(/style="([^"]*)"/i)[1];

                expect(actual).toEqual(expected);

                wrapper.unmount();
            });

        });
    });
});

