import { barData } from '../../helpers/testData';
import bar from './barChart';

describe('Bar Chart', () => {
    let anchor;

    beforeEach(() => {
        anchor = document.createElement('div');
    });

    describe('create', () => {

        describe('when incorrect arguments are used', () => {

            describe('when the DOM element is not passed', () => {
                it('should throw an error', () => {
                    expect(() => {
                        bar.create(
                            undefined,
                            barData.withLetters(),
                            {}
                        );
                    }).toThrowError('A root container is required');
                });
            });

            describe('when the Data is not passed', () => {
                it('should throw an error with undefined data', () => {
                    expect(() => {
                        bar.create(
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
                        bar.create(
                            anchor,
                            barData.withLetters(),
                            { test: 'test' }
                        );
                    }).toThrowError('Method not supported by Britechart: test');
                });
            });

            describe('when wrong event handlers are passed', () => {
                it('should throw ane error', () => {
                    const callback = jest.fn();

                    expect(() => {
                        bar.create(
                            anchor,
                            barData.withLetters(),
                            { customFakeEvent: callback }
                        );
                    }).toThrowError('Method not supported by Britechart: customFakeEvent');
                });
            });
        });

        describe('when proper arguments are passed', () => {

            it('should set data as a DOM property', () => {
                const expected = barData.withColors().length;

                bar.create(anchor, barData.withColors());

                const actual = anchor.__data__.length;

                expect(actual).toEqual(expected);
            });
        });
    });
});
