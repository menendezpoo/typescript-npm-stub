import {assert} from 'chai';
import {main} from "../../src";
import {App} from "../../src/App";
import {randomInt, randomWord} from "../../src/util/TestUtils";
import {Logger} from "../../src/util/Logger";

describe('index', function () {

    beforeEach(async function () {
        if(App.instance) {
            await App.instance.terminate();
        }
    });

    before(function () {
        Logger.voidAllConsumers();
    });

    after(function () {
        Logger.restoreConsumersToDefaults();
    });

    it('should launch the app with config', async function () {

        const port = randomInt(1000, 9000);

        App.configProvider = async () => ({
            port
        });

        await main();

        assert.isNotNull(App.instance);
        assert.isNotNull(App.instance!.config);
        assert.strictEqual(App.instance!.config!.port, port);
    });

    it('should break the app', async function () {

        const word = randomWord();
        const output: string[] = [];

        Logger.consumers.ERROR = line => output.push(line);

        App.configProvider = async () => {throw word};

        await main();

        assert.isTrue(output.length > 0);
        assert.isTrue(output.filter(line => line.indexOf(word) >= 0).length > 0);

        Logger.restoreConsumersToDefaults();

    });

});