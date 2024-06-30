import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

const config = {
    
    scale: {
        mode: Phaser.Scale.FIT,
        widht: 400,
        height: 850,
    },
    parent: "container",
    scene: [BootLoader, Splash, Game]
}

new Phaser.Game(config);