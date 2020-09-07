import ViewportManager from "../scripts/managers/viewport-manager";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    init() {
        ViewportManager.instance.initializeScene(this);
    }

    preload() {

    }

    create() {
        const gameSize = ViewportManager.instance.gameSize;

        var background = this.add.image(gameSize.width / 2, gameSize.height / 2, 'undersea');
        background.setDisplaySize(gameSize.width, gameSize.height);

        var logo = this.add.image(ViewportManager.instance.width / 2, ViewportManager.instance.height / 2, 'logo');


        // Example how to use the resize.
        ViewportManager.instance.emitter.on('resize', (gameSize) => {
            background.setPosition(gameSize.width / 2, gameSize.height / 2)
            background.setDisplaySize(gameSize.width, gameSize.height);
            logo.setPosition(gameSize.width / 2, gameSize.height / 2)
        });
    }

    update() {

    }
}