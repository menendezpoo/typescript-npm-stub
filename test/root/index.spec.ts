import {assert} from 'chai';
import {main} from "../../src";
import {App} from "../../src/App";

describe('index', function () {
    it('should launch the application', async function () {
        const app: any = await main();

        assert.isTrue(app instanceof App );
    });
});