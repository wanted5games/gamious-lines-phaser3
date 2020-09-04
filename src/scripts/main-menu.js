export default class MainMenu extends Phaser.GameObjects.Container {
    constructor(scene, x, y, children) {
        super(scene, x, y, children)

        this._buildBackground();
        this._buildMenuItems();
        this._buildDailyChallengeButton();
    }

    _buildBackground() {
        // Build a background and fill the whole game
    }

    _buildMenuItems() {
        // Build all different menu items
    }

    _buildDailyChallengeButton() {
        this.text = new Text();


        // Build a challenge at the top right corner
    }

    show() {
        this.setVisible(true);
        // TODO show an animation 
    }

    hide() {
        // TODO show an animation
        // this.setVisible(hide);
    }

    update() {
        console.log("update");
    }
}