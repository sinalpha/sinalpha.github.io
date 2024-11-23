import Splash from './scenes/Splash.js'
import Game from './scenes/Game.js'
import BootLoader from './scenes/BootLoader.js';
import Status from './scenes/Status.js'
import Menu from './scenes/Menu.js'
import Food from './scenes/Food.js'

const gameScreenRation = 3/7; //horizon:vertical
const gameScreenSize = { width:window.innerHeight * gameScreenRation, height:window.innerHeight};

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

    /*
    
        add resize evnet listener
    
    */
    let myGameCanvas = document.getElementsByTagName("canvas")[0];

    window.addEventListener('resize', function(event) {
        
        myGameCanvas.height = window.screen.height;
        myGameCanvas.width = myGameCanvas.height * gameScreenRation;

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