import { stackedAreaData } from '../../helpers/testData';
import stackedArea from './stackedAreaChart';

describe('Stacked Area Chart', () => {
    let anchor;

    describe('create', () => {

        beforeEach(() => {
            anchor = document.createElement('div');
        });

        describe('when incorrect arguments are used', () => {

            describe('when the DOM element is not passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        stackedArea.create(
                            undefined,
                            stackedAreaData.with3Sources(),
                            {}
                        );
                    }).toThrowError('A root container is required');
                });
            });

            describe('when the Data is not passed', () => {
                it('should throw an error with undefined data', () => {
                    expect(() => {
                        stackedArea.create(
                            anchor,
                            undefined,
                            {}
                        );
                    }).toThrowError('Data must be defined');
                });

                it('should throw an error with empty data', () => {
                    expect(() => {
                        stackedArea.create(
                            anchor,
                            [],
                            {}
                        );
                    }).toThrowError('Data must be defined');
                });
            });

            describe('when a non-supported method is passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        stackedArea.create(
                            anchor,
                            stackedAreaData.with3Sources(),
                            {test: 'test'}
                        );
                    }).toThrowError('Method not supported by Britecharts Stacked Area Chart: test');
                });
            });
        });

        describe('when proper arguments are passed', () => {

            it('should set data as a DOM property', () => {
                const expected = stackedAreaData.with3Sources().length;

                stackedArea.create(anchor, stackedAreaData.with3Sources());

                const actual = anchor.__data__.length;

                expect(actual).toEqual(expected);
            });

            it('should set the width', () => {
                const expected = 500;

                const chart = stackedArea.create(
                    anchor,
                    stackedAreaData.with3Sources(),
                    {width: expected}
                );

                const actual = chart.width();

                expect(actual).toEqual(expected);
            });

            it('should set the height', () => {
                const expected = 600;

                const chart = stackedArea.create(
                    anchor,
                    stackedAreaData.with3Sources(),
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

                const chart = stackedArea.create(
                    anchor,
                    stackedAreaData.with3Sources(),
                    {margin: expected}
                );

                const actual = chart.margin();

                expect(actual).toEqual(expected);
            });

            it('should set the grid', () => {
                const expected = 'vertical';

                const chart = stackedArea.create(
                    anchor,
                    stackedAreaData.with3Sources(),
                    {grid: expected}
                );

                const actual = chart.grid();

                expect(actual).toEqual(expected);
            });
        });
    });
});

