import {App} from "./App";
import {Logger} from "./util/Logger";

const logger = new Logger('main-index');

export async function main() {

    return App.initialize()
        .then(app => app.run())
        .catch(e => logger.error(`App failed: ${e}`));

}