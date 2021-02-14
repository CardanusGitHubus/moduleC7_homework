import { it } from '@jest/globals';
import { revertString } from '../main.js';

describe('tests for revertString function', () => {
    it('should revert a string', () => {
        expect(revertString('qwerty123')).toBe('321ytrewq');
    });
})