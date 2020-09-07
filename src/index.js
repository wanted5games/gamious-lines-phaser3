import Phaser from 'phaser';
import BootScene from './scenes/boot-scene';
import GameScene from './scenes/game-scene';
import BumperScene from './scenes/bumper-scene';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scale: {
    mode: Phaser.Scale.NONE,
    //autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [BootScene, BumperScene, GameScene]
};

const game = new Phaser.Game(config);