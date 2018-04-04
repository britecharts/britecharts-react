import { applyConfiguration } from './configuration';

describe('Configuration', () => {
    it('should allow setting empty string', () => {
        const expected = '';
        const mockChart = {
            'expected': (value) => {
                mockChart._expected = value;
            },
        };
        let actual = applyConfiguration(mockChart, { expected: '' })._expected;

        expect(actual).toEqual(expected);
    });
});
