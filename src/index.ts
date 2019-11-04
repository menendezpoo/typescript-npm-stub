import {App} from "./App";

App.initialize()
    .then( _ => console.log("App Initialized"))
    .catch( e => console.error("Failed to initialize", e));