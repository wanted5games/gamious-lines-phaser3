import Phaser from 'phaser';
import GameManager from '../scripts/game-manager';
import MainMenu from '../scripts/main-menu';
import ViewportManager from '../scripts/managers/viewport-manager';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
  }

  init() {
    ViewportManager.instance.initializeScene(this);
  }

  preload() {
    // Load images needed for the bumper scene.
    this.load.image('logo', 'assets/sprites/spr_bumper_gamious_dotless.png')
    this.load.image('undersea', 'assets/undersea-bg.png');
    this.load.image('bubble', 'assets/bubble.png');
  }

  create() {
    this.scene.start('BumperScene');
  }
}
