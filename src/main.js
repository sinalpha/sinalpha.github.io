import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

const width = window.innerWidth;
const height = window.innerHeight;
const config = {
    type:Phaser.CANVAS,
    width:width,
    height:height,
    parent: 'container',
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:width,
        height:height
    },
    scene: [BootLoader, Splash, Game]
}

const game = new Phaser.Game(config);