import {Config} from "./Config";
import {Logger} from "./util/Logger";

const logger = new Logger('App');

export class App{

    private static _instance: App | null = null;

    static get instance(): App | null { return App._instance; }

    static async initialize(): Promise<App>{

        if(App.instance) {
            throw `Already Initialized`;
        }

        logger.info("Initializing");

        const app = new App();

        logger.info(`Loading config`);

        /**
         * TODO: Add more initialization methods here.
         *       Keep it simple and as stateless as possible.
         */

        await app.initializeConfig();

        App._instance = app;


        return app;
    }

    /**
     * TODO: Config provider should figure out how to get configuration.
     *       Check the tests to make it comply.
     */
    static configProvider: () => Promise<Config> = async () => ({
        port: 9090
    });

    config: Config | null = null;

    private constructor(){}

    private async initializeConfig(){
        this.config = await App.configProvider();
    }

    run(){
        logger.info("Running!");
    }

    async terminate(){

        /**
         * TODO: Add finalization methods here, e.g.
         *       Close network connections
         *       Wait pending work to finish
         *       Consider tests will terminate app to test it
         */

        App._instance = null;
    }

}