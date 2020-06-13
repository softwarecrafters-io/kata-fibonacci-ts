import { fibonacci } from '../core/fibonacci';

test('Calculate fibonnaci number', () => {
	const testCases = [
		{ value: 0, expected: 0 },
		{ value: 1, expected: 1 },
		{ value: 2, expected: 1 },
		{ value: 3, expected: 2 },
		{ value: 4, expected: 3 },
		{ value: 5, expected: 5 },
		{ value: 6, expected: 8 },
		{ value: 7, expected: 13 },
	];

	testCases.forEach((testCase) => expect(fibonacci(testCase.value)).toBe(testCase.expected));
});
