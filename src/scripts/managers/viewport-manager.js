import Singleton from "../../design-patterns/singleton"

export default class ViewportManager extends Singleton {
    constructor() {
        super();

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

         // Emitter for emitting the resize.
        this.emitter = new Phaser.Events.EventEmitter();

        this._currentScene = null;

        this._gameSize = {
            width: 0,
            height: 0,
        }
    }

    /**
     * Return the width of the game
     */
    get width() {
        return this._gameSize.width;
    }

    /**
     * Return the height of the game
     */
    get height() {
        return this._gameSize.height;
    }

    /**
     * Return the game size;
     */
    get gameSize() {
        return this._gameSize;
    }

    /**
     * Set the resize events on the new scene.
     * @param {Phaser.Scene} scene 
     */
    initializeScene(scene) {
        if (this._currentScene) {
            this._currentScene.scale.off('resize', this._onResize, this);
            this.emitter.removeAllListeners('resize');
            this._currentScene = scene;
        } else {
            // First time resize
            this._currentScene = scene;
            this._onWindowResize();
        }

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this._currentScene.scale.on('resize', this._onResize, this);

        this._onResize({width : window.innerWidth, height: window.innerHeight });
    }

    _onResize(gameSize) {
        this._gameSize.width = gameSize.width;
        this._gameSize.height = gameSize.height;

        this._currentScene.cameras.resize(gameSize.width, gameSize.height);

        this.emitter.emit('resize', gameSize);
    }

    _onWindowResize(event) {
        this._currentScene.game.scale.resize(window.innerWidth, window.innerHeight);
        // TODO send event
    }
}