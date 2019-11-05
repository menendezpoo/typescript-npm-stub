import {assert} from 'chai';
import {App} from "../../src/App";

describe('App', function () {
    it('should Initialize', async function () {
        return App.initialize().then(app => {
            assert.isTrue(app instanceof App);
        })
    });
});