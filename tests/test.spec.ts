import { assert } from 'chai';
import { add, fooyada } from '../src/math';

describe('mocha', () => {

    it('adds correctly', () => {
        const result: number = add(5, 5);
        assert.isTrue(result === 10);
    });

    it('returns string', () => {
        const blah = fooyada();
        console.info(`blah version: ${blah}`);
        assert.isTrue(blah == "foobar");
    });
})
