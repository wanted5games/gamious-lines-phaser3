export default class Text extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style) {
        super(scene, x, y, text, style);

        // TODO add an event listener to listen to the Localisation Manager
    }

    setText(key) {
        // TODO get language
        var string = key;

        super(string);
    }

    // TODO localisation
}