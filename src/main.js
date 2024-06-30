import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

const config = {
    widht: 400,
    height: 850,
    // scale: {
    //     //mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_V,
    // },
    parent: "container",
    scene: [BootLoader, Splash, Game]
}

new Phaser.Game(config);