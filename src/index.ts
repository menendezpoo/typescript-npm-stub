import {App} from "./App";
import {Logger} from "layer-logging";

const logger = new Logger('main-index');

export async function main() {

    return App.initialize()
        .then(app => app.run())
        .catch(e => logger.error(`App failed: ${e}`));

}