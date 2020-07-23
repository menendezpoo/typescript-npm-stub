import {assert} from 'chai';
import {times} from "../../src/util/TestUtils";

describe(`TestUtils`, function () {

    it('should repeat n times', function () {
        const target = 5;
        let counter = 0;
        times(target, () => counter++);
        assert.strictEqual(target, counter);
    });

    it('should no repeat a zero', function () {
        const target = 0;
        const passed = 0;
        let counter = 0;

        times(passed, () => counter++);
        assert.strictEqual(target, counter);
    });

    it('should no repeat a NaN', function () {
        const target = 0;
        const passed = NaN;
        let counter = 0;

        times(passed, () => counter++);
        assert.strictEqual(target, counter);
    });

    it('should no repeat a Infinity', function () {
        const target = 0;
        const passed = 1/0;
        let counter = 0;

        times(passed, () => counter++);
        assert.strictEqual(target, counter);
    });

    it('should no repeat a negative number', function () {
        const target = 0;
        const passed = -1;
        let counter = 0;

        times(passed, () => counter++);
        assert.strictEqual(target, counter);
    });

});