import { fibonacci } from '../core/fibonacci';

test('fibonnaci should', () => {
	const testCases = [
		{ value: 0, expected: 0 },
		{ value: 1, expected: 1 },
		{ value: 2, expected: 1 },
		{ value: 3, expected: 2 },
	];

	testCases.forEach((testCase) => expect(fibonacci(testCase.value)).toBe(testCase.expected));
});
