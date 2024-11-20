import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';
import Status from './scenes/status.js'
import Menu from './scenes/menu.js'
import Food from './scenes/food.js'

const game_width = window.innerWidth;
const game_height = window.innerHeight;
const config = {
    type:Phaser.WEBGL,
    width:game_width,
    height:game_height,
    parent: 'container',
    scene: [BootLoader, Splash, Game, Status, Menu, Food],
    
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