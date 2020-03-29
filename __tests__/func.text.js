import * as func from '../func';

describe('Checking Functions', () => {
	test('Check if we are getting ', async () => {
		const x = await func.getBazinga();
		await expect(x).toBe('BAZINGA !!!');
	});
});
