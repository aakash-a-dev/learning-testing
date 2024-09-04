import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', ()=> {
    test('add 1 + 2 to equal 3', ()=> {
        expect(sum(1, 2)).toBe(3);
    })
    test('add 2 + 2 to equal 4', ()=> {
        expect(sum(2, 2)).toBe(4);
    })  
    test('add 3 + 2 to equal 5', ()=> {
        expect(sum(3, 2)).toBe(5);
    })
})