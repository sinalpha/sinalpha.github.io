import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';
import Status from './scenes/status.js'
import Menu from './scenes/menu.js'
import Food from './scenes/food.js'


const gameScreenSize = { width:window.innerWidth, height:window.innerHeight};

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:Phaser.WEBGL,
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