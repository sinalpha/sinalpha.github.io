import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

const config = {
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    parent: "container",
    scene: [BootLoader, Splash, Game]
}

new Phaser.Game(config);