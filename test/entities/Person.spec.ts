import {assert} from 'chai';
import {Person} from "../../src/entities/Person";

describe('entities/Person', function () {
    it('should create the object', function () {
        const p = new Person("a", "b");

        assert.strictEqual(p.firstName, "a");
        assert.strictEqual(p.lastName, "b");
    });
});