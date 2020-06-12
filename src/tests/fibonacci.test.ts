import { fibonacci } from '../core/fibonacci';

test('when recieve zero returns zero', () => {
	const result = fibonacci(0);
	const expected = 0;

	expect(result).toBe(expected);
});

test('when recieve one returns one', () => {
	const result = fibonacci(1);
	const expected = 1;

	expect(result).toBe(expected);
});

test('when recieve two returns one', () => {
	const result = fibonacci(1);
	const expected = 1;

	expect(result).toBe(expected);
});
