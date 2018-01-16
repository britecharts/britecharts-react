import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import LoadingContainer from './LoadingContainer';

import barData from '../bar/barChart.fixtures';
import bar from '../bar/barChart';
``
Enzyme.configure({ adapter: new Adapter() });

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

                console.log(childContainer.html());

                let actual = childContainer.html().match(/style="([^"]*)"/i)[1];

                expect(actual).toEqual(expected);

                wrapper.unmount();
            });

        });
    });
});

