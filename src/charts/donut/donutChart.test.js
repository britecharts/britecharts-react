import { donutData } from '../../helpers/testData';
import donut from './donutChart';

describe('Donut Chart', () => {
    let anchor;

    beforeEach(() => {
        anchor = document.createElement('div');
    });

    describe('create', () => {

        describe('when incorrect arguments are used', () => {

            describe('when the DOM element is not passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        donut.create(
                            undefined,
                            donutData(),
                            {}
                        );
                    }).toThrowError('A root container is required');
                });
            });

            describe('when the Data is not passed', () => {
                it('should throw an error with undefined data', () => {
                    expect(() => {
                        donut.create(
                            anchor,
                            undefined,
                            {}
                        );
                    }).toThrowError('Data must be defined');
                });
            });

            describe('when a non-supported method is passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        donut.create(
                            anchor,
                            donutData(),
                            {test: 'test'}
                        );
                    }).toThrowError('Method not supported by Britechart: test');
                });
            });

            describe('when wrong event handlers are passed', () => {
                it('should throw ane error', () => {
                    const callback = jest.fn();

                    expect(() => {
                        donut.create(
                            anchor,
                            donutData(),
                            {customFakeEvent: callback}
                        );
                    }).toThrowError('Method not supported by Britechart: customFakeEvent');
                });
            });
        });

        describe('when proper arguments are passed', () => {

            it('should set data as a DOM property', () => {
                const expected = donutData().length;

                donut.create(anchor, donutData());

                const actual = anchor.__data__.length;

                expect(actual).toEqual(expected);
            });

            it('should set the width', () => {
                const expected = 500;

                const chart = donut.create(
                    anchor,
                    donutData(),
                    {width: expected}
                );

                const actual = chart.width();

                expect(actual).toEqual(expected);
            });

            it('should set the height', () => {
                const expected = 600;

                const chart = donut.create(
                    anchor,
                    donutData(),
                    {height: expected}
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

                const chart = donut.create(
                    anchor,
                    donutData(),
                    {margin: expected}
                );

                const actual = chart.margin();

                expect(actual).toEqual(expected);
            });

            describe('when event handlers are passed', () => {

                it('should set customMouseOver callback', () => {
                    const expected = jest.fn();

                    const chart = donut.create(
                        anchor,
                        donutData(),
                        {customMouseOver: expected}
                    );

                    const actual = chart.on('customMouseOver');

                    expect(actual).toEqual(expected);
                });

                it('should set customMouseOut callback', () => {
                    const expected = jest.fn();

                    const chart = donut.create(
                        anchor,
                        donutData(),
                        {customMouseOut: expected}
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
                    const firstDataSet = donutData();
                    const secondDataSet = [{
                        quantity: 5,
                        percentage: 20,
                        name: 'rick',
                        id: 1,
                    }];

                    donut.create(anchor, firstDataSet, {});
                    donut.update(anchor, secondDataSet, {});

                    const expected = secondDataSet.length;
                    const actual = anchor.__data__.length;

                    expect(actual).toEqual(expected);
                });
            });

            describe('when new data is not passed', () => {
                it('should keep the data in the container', () => {
                    const dataSet = donutData();

                    donut.create(anchor, dataSet, {});
                    donut.update(anchor, dataSet, {});

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
                    const chart = donut.create(
                        anchor,
                        donutData(),
                        {width: firstWidth}
                    );

                    donut.update(anchor, [], {width: expected});

                    const actual = chart.width();

                    expect(actual).toEqual(expected);
                });
            });
        });
    });
});
