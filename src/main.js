import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';


const width = window.innerWidth;
const height = window.innerHeight;
const config = {
    type:Phaser.WEBGL,
    width:width,
    height:height,
    parent: 'container',
    scene: [BootLoader, Splash, Game],
    
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
    },
    
    physics:{
        default: 'arcade',
        
        arcade: {
            debug: false
        }
    }
}

const game = new Phaser.Game(config);