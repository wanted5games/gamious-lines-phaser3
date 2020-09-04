import Phaser from 'phaser';
import GameManager from '../scripts/game-manager';
import MainMenu from '../scripts/main-menu';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    })
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('undersea', 'assets/ui/undersea-bg.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('bubble', 'assets/particles/bubble.png');
  }

  create() {
    GameManager.instance.publicFunction();
    GameManager.instance._privateFunction();
    
    this.mainMenu = new MainMenu(this, 100, 100);



    // Negeren
    this.add.image(400, 300, 'undersea');

    var particles = this.add.particles('bubble');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
