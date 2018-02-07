import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import {{pascalCase componentName}} from './{{pascalCase componentName}}';
import {{camelCase componentName}}Data from './{{camelCase componentName}}Chart.fixtures';

import {{camelCase componentName}} from './{{camelCase componentName}}Chart';

Enzyme.configure({ adapter: new Adapter() });

describe('{{titleCase componentName}} Chart', () => {

    describe('render', () => {
        
        describe('when data passed in', () => {
            let createSpy;

            beforeEach(() => {
                createSpy = jest.spyOn({{camelCase componentName}}, 'create');
            });

            afterEach(() => {
                createSpy.mockReset();
                createSpy.mockRestore();
            });

            it('should call the create method or the chart', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();

                mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

                let expected = 1;
                let actual = createSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the container as the first argument', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();

                const wrapper = mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

                let expected = wrapper.find('.{{dashCase componentName}}-container').instance();
                let actual = createSpy.mock.calls[0][0];

                expect(actual).toEqual(expected);
            });

            it('should call the create method or the chart with the configuration object as the second argument', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();

                mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

                let expectedData = dataSet;
                let actualData = createSpy.mock.calls[0][1];

                expect(actualData).toEqual(expectedData);
            });

            it('should allow setting width', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();
                let expected = 500;

                mount(
                    <{{pascalCase componentName}}
                        chart={{{camelCase componentName}}}
                        data={dataSet}
                        width={expected}
                    />
                );

                let actual = createSpy.mock.calls[0][2].width;

                expect(actual).toEqual(expected);
            });

            it('should allow setting height', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();
                let expected = 500;

                mount(
                    <{{pascalCase componentName}}
                        chart={{{camelCase componentName}}}
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
                updateSpy = jest.spyOn({{camelCase componentName}}, 'update');
            });

            afterEach(() => {
                updateSpy.mockReset();
                updateSpy.mockRestore();
            });

            it('should call the update method or the chart', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();
                const wrapper = mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: {{camelCase componentName}}Data.secondDataMethod(),
                });

                let expected = 1;
                let actual = updateSpy.mock.calls.length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new data to the update method', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();
                const wrapper = mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

                // Changing properties should trigger a componentDidUpdate
                wrapper.setProps({
                    data: {{camelCase componentName}}Data.secondDataMethod(),
                });

                let expected = {{camelCase componentName}}Data.secondDataMethod().length;
                let actual = updateSpy.mock.calls[0][1].length;

                expect(actual).toEqual(expected);
            });

            it('should pass in the new configuration to the update method', () => {
                const dataSet = {{camelCase componentName}}Data.firstDataMethod();
                const wrapper = mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);
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
            createSpy = jest.spyOn({{camelCase componentName}}, 'destroy');
        });

        afterEach(() => {
            createSpy.mockReset();
            createSpy.mockRestore();
        });

        it('should call the destroy method or the chart', () => {
            const dataSet = {{camelCase componentName}}Data.firstDataMethod();
            const wrapper = mount(<{{pascalCase componentName}} chart={{{camelCase componentName}}} data={dataSet} />);

            wrapper.unmount();

            let expected = 1;
            let actual = createSpy.mock.calls.length;

            expect(actual).toEqual(expected);
        });
    });
});

