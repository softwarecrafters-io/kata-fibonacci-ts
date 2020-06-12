import { fibonacci } from '../core/fibonacci';

test('when recieve zero returns zero', () => {
	const result = fibonacci(0);
	const expected = 0;

	expect(result).toBe(expected);
});