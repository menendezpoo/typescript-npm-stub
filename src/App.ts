import {Person} from "./entities/Person";

export class App{

    static async initialize(){
        return new App();
    }

    private constructor(){
        console.log(JSON.stringify(new Person("John", "Doe")));
    }
}