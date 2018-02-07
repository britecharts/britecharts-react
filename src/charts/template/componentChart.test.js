import {{lowerFirst componentName}}Data from './{{lowerFirst componentName}}Chart.fixtures';
import {{lowerFirst componentName}} from './{{lowerFirst componentName}}Chart';

describe('{{componentName}} Chart', () => {
    let anchor;

    beforeEach(() => {
        anchor = document.createElement('div');
    });

    describe('create', () => {

        describe('when incorrect arguments are used', () => {

            describe('when the DOM element is not passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                      {{lowerFirst componentName}}.create(
                            undefined,
                            {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                            {}
                        );
                    }).toThrowError('A root container is required');
                });
            });

            describe('when a non-supported method is passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        {{lowerFirst componentName}}.create(
                            anchor,
                            {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                            { test: 'test' }
                        );
                    }).toThrowError('Method not supported by Britechart: test');
                });
            });

            describe('when wrong event handlers are passed', () => {
                it('should throw ane error', () => {
                    const callback = jest.fn();

                    expect(() => {
                        {{lowerFirst componentName}}.create(
                            anchor,
                            {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                            { customFakeEvent: callback }
                        );
                    }).toThrowError('Method not supported by Britechart: customFakeEvent');
                });
            });
        });

        describe('when proper arguments are passed', () => {

            it('should set data as a DOM property', () => {
                const expected = {{lowerFirst componentName}}Data.firstDataSourceMethod().length;

                {{lowerFirst componentName}}.create(anchor, {{lowerFirst componentName}}Data.firstDataSourceMethod());

                const actual = anchor.__data__.length;

                expect(actual).toEqual(expected);
            });

            it('should set the width', () => {
                const expected = 500;

                const chart = {{lowerFirst componentName}}.create(
                    anchor,
                    {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                    { width: expected }
                );

                const actual = chart.width();

                expect(actual).toEqual(expected);
            });

            it('should set the height', () => {
                const expected = 600;

                const chart = {{lowerFirst componentName}}.create(
                    anchor,
                    {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                    { height: expected }
                );

                const actual = chart.height();

                expect(actual).toEqual(expected);
            });

            it('should set the margin', () => {
                const expected = {
                    top: 0,
                    bottom: 1,
                    left: 2,
                    right: 3,
                };

                const chart = {{lowerFirst componentName}}.create(
                    anchor,
                    {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                    { margin: expected }
                );

                const actual = chart.margin();

                expect(actual).toEqual(expected);
            });

            it('should set the grid', () => {
                const expected = 'vertical';

                const chart = {{lowerFirst componentName}}.create(
                    anchor,
                    {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                    { grid: expected }
                );

                const actual = chart.grid();

                expect(actual).toEqual(expected);
            });

            describe('when event handlers are passed', () => {

                it('should set customMouseOver callback', () => {
                    const expected = jest.fn();

                    const chart = {{lowerFirst componentName}}.create(
                        anchor,
                        {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                        { customMouseOver: expected }
                    );

                    const actual = chart.on('customMouseOver');

                    expect(actual).toEqual(expected);
                });

                it('should set customMouseMove callback', () => {
                    const expected = jest.fn();

                    const chart = {{lowerFirst componentName}}.create(
                        anchor,
                        {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                        { customMouseMove: expected }
                    );

                    const actual = chart.on('customMouseMove');

                    expect(actual).toEqual(expected);
                });

                it('should set customMouseOut callback', () => {
                    const expected = jest.fn();

                    const chart = {{lowerFirst componentName}}.create(
                        anchor,
                        {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                        { customMouseOut: expected }
                    );

                    const actual = chart.on('customMouseOut');

                    expect(actual).toEqual(expected);
                });
            });
        });
    });

    describe('update', () => {

        describe('when updating data', () => {

            describe('when new data is passed', () => {
                it('should update the data in the container', () => {
                    const firstDataSet = {{lowerFirst componentName}}Data.firstDataSourceMethod();
                    const secondDataSet = {{lowerFirst componentName}}Data.secondDataSourceMethod();
                    let chart = {{lowerFirst componentName}}.create(anchor, firstDataSet, {});

                    {{lowerFirst componentName}}.update(anchor, secondDataSet, {}, chart);

                    const expected = secondDataSet.length;
                    const actual = anchor.__data__.length;

                    expect(actual).toEqual(expected);
                });
            });

            describe('when new data is not passed', () => {
                it('should keep the data in the container', () => {
                    const dataSet = {{lowerFirst componentName}}Data.firstDataSourceMethod();
                    let chart = {{lowerFirst componentName}}.create(anchor, dataSet, {});

                    {{lowerFirst componentName}}.update(anchor, [], {}, chart);

                    const expected = dataSet.length;
                    const actual = anchor.__data__.length;

                    expect(actual).toEqual(expected);
                });
            });
        });

        describe('when updating configuration', () => {

            describe('when new configuration is passed', () => {
                it('should update the configuration in the chart', () => {
                    const expected = 500;
                    const firstWidth = 200;
                    const chart = {{lowerFirst componentName}}.create(
                        anchor,
                        {{lowerFirst componentName}}Data.firstDataSourceMethod(),
                        { width: firstWidth }
                    );

                    {{lowerFirst componentName}}.update(anchor, [], { width: expected }, chart);

                    const actual = chart.width();

                    expect(actual).toEqual(expected);
                });
            });
        });
    });
});
