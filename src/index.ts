import {App} from "./App";

export const main = async () =>
    App.initialize()
        .catch( e => console.error("Failed to initialize", e));