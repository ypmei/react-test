jest.unmock('../sum');

import { sum } from '../sum';

describe('sum',()=>{
	it("1+1=2",()=>{
		expect(sum(1,4)).toBe(5);
	})
})