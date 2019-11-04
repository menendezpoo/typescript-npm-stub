import {Person} from "./entities/Person";

export class App{

    static async initialize(){
        return new App();
    }

    private constructor(){
        new Person("John", "Doe");
    }
}