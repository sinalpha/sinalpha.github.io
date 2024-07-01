import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "container",
    scene: [BootLoader, Splash, Game]
}

new Phaser.Game(config);