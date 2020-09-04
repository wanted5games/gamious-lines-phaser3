import Singleton from "../design-patterns/singleton";

export default class GameManager extends Singleton {
    constructor() {
        super();

        console.log("GameManager has been created");

        // Defining all variables
        this.variable = "This is a public variable";
        this._variable = "This is a private variable";

        this.publicFunction();
        this._privateFunction();
    }

    publicFunction() {
        console.log("This is a public function");
    }

    _privateFunction() {
        console.log("This is a private function");
    }
}