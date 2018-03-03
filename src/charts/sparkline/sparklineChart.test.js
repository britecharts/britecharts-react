import sparklineData from './sparklineChart.fixtures';
import sparkline from './sparklineChart';

describe('Sparkline Chart', () => {
    let anchor;

    beforeEach(() => {
        anchor = document.createElement('div');
    });

    describe('create', () => {

        describe('when incorrect arguments are used', () => {

            describe('when the DOM element is not passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                      sparkline.create(
                            undefined,
                            sparklineData.firstDataMethod(),
                            {}
                        );
                    }).toThrowError('A root container is required');
                });
            });

            describe('when a non-supported method is passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        sparkline.create(
                            anchor,
                            sparklineData.firstDataMethod(),
                            { test: 'test' }
                        );
                    }).toThrowError('Method not supported by Britechart: test');
                });
            });

            describe('when wrong event handlers are passed', () => {
                it('should throw ane error', () => {
                    const callback = jest.fn();

                    expect(() => {
                        sparkline.create(
                            anchor,
                            sparklineData.firstDataMethod(),
                            { customFakeEvent: callback }
                        );
                    }).toThrowError('Method not supported by Britechart: customFakeEvent');
                });
            });
        });

        describe('when proper arguments are passed', () => {

            it('should set data as a DOM property', () => {
                const expected = sparklineData.firstDataMethod().length;

                sparkline.create(anchor, sparklineData.firstDataMethod());

                const actual = anchor.__data__.length;

                expect(actual).toEqual(expected);
            });

            it('should set the width', () => {
                const expected = 500;

                const chart = sparkline.create(
                    anchor,
                    sparklineData.firstDataMethod(),
                    { width: expected }
                );

                const actual = chart.width();

                expect(actual).toEqual(expected);
            });

            it('should set the height', () => {
                const expected = 600;

                const chart = sparkline.create(
                    anchor,
                    sparklineData.firstDataMethod(),
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

                const chart = sparkline.create(
                    anchor,
                    sparklineData.firstDataMethod(),
                    { margin: expected }
                );

                const actual = chart.margin();

                expect(actual).toEqual(expected);
            });

            /**
             * The grid is not supported by every chart, and this test should only be included if necessary
             */
            it('should set the grid', () => {
                const expected = 'vertical';

                const chart = sparkline.create(
                    anchor,
                    sparklineData.firstDataMethod(),
                    { grid: expected }
                );

                const actual = chart.grid();

                expect(actual).toEqual(expected);
            });

            describe('when event handlers are passed', () => {

                it('should set customMouseOver callback', () => {
                    const expected = jest.fn();

                    const chart = sparkline.create(
                        anchor,
                        sparklineData.firstDataMethod(),
                        { customMouseOver: expected }
                    );

                    const actual = chart.on('customMouseOver');

                    expect(actual).toEqual(expected);
                });

                it('should set customMouseMove callback', () => {
                    const expected = jest.fn();

                    const chart = sparkline.create(
                        anchor,
                        sparklineData.firstDataMethod(),
                        { customMouseMove: expected }
                    );

                    const actual = chart.on('customMouseMove');

                    expect(actual).toEqual(expected);
                });

                it('should set customMouseOut callback', () => {
                    const expected = jest.fn();

                    const chart = sparkline.create(
                        anchor,
                        sparklineData.firstDataMethod(),
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
                    const firstDataSet = sparklineData.firstDataMethod();
                    const secondDataSet = sparklineData.secondDataMethod();
                    let chart = sparkline.create(anchor, firstDataSet, {});

                    sparkline.update(anchor, secondDataSet, {}, chart);

                    const expected = secondDataSet.length;
                    const actual = anchor.__data__.length;

                    expect(actual).toEqual(expected);
                });
            });

            describe('when new data is not passed', () => {
                it('should keep the data in the container', () => {
                    const dataSet = sparklineData.firstDataMethod();
                    let chart = sparkline.create(anchor, dataSet, {});

                    sparkline.update(anchor, [], {}, chart);

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
                    const chart = sparkline.create(
                        anchor,
                        sparklineData.firstDataMethod(),
                        { width: firstWidth }
                    );

                    sparkline.update(anchor, [], { width: expected }, chart);

                    const actual = chart.width();

                    expect(actual).toEqual(expected);
                });
            });
        });
    });
});
