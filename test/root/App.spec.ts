import {assert} from 'chai';
import {App} from "../../src/App";
import {Logger} from "layer-logging";

describe(`App`, function () {

    before(function () {
        Logger.voidAllConsumers()
    });

    after(function () {
        Logger.restoreConsumersToDefaults();
    });

    it('should gracefully initialize and terminate App', async function () {

        assert.isNull(App.instance);

        await App.initialize();

        assert.isTrue(App.instance instanceof App);

        await App.instance!.terminate();

    });

    it('should fail to initialize already initialized App', async function () {

        await App.initialize();

        let triggered = false;

        try{
            await App.initialize();
        }catch(e){
            triggered = true;
        }

        assert.isTrue(triggered);

        await App.instance!.terminate();

    });

});