import Phaser from 'phaser';
import GameManager from '../scripts/game-manager';
import MainMenu from '../scripts/main-menu';
import ViewportManager from '../scripts/managers/viewport-manager';

export default class BumperScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BumperScene'
    });
  }

  init() {
    ViewportManager.instance.initializeScene(this);

    // TODO Create bumper
  }

  preload() {
    // TODO Load all other images.
  }

  create() {
    // TODO Switch scene when it's done
    this.scene.start('GameScene');
  }
}
