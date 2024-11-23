import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';
import Status from './scenes/status.js'
import Menu from './scenes/menu.js'
import Food from './scenes/food.js'

const gameScreenSize = { width:window.innerWidth, height:window.innerHeight};

const gameType = Phaser.WEBGL;

const gameParent = "container";

const gameScenes = [BootLoader, Splash, Game, Status, Menu, Food];

const gameScale = {
    mode:Phaser.Scale.FIT,
    autoCenter:Phaser.Scale.CENTER_BOTH,
} 

const gamePhysics = {
    default: 'arcade',
    
    arcade: {
        debug: false
    }
}

const  gamePostBoot = function(game){

    let myGameCanvas = document.getElementsByTagName("canvas")[0];

    window.addEventListener('resize', function(event) {
        
        myGameCanvas.width = window.screen.width;
        myGameCanvas.height = window.screen.height;

    }, true);
}

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:gameType,
    parent: gameParent,
    scene: gameScenes,
    scale:gameScale,
    physics:gamePhysics,
    postBoot:gamePostBoot
}