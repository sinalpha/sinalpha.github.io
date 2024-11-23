import Splash from './scenes/Splash.js'
import Game from './scenes/Game.js'
import BootLoader from './scenes/BootLoader.js';
import Status from './scenes/Status.js'
import Menu from './scenes/Menu.js'
import Food from './scenes/Food.js'

const gameScreenRation = 3/7; //가로:세로
const gameScreenSize = { width:window.innerHeight * gameScreenRation, height:window.innerHeight};

const gameType = Phaser.WEBGL;

const gameParent = "container";

const gameScenes = [BootLoader, Splash, Game, Status, Menu, Food];

const gameScale = {
    mode:Phaser.Scale.RESIZE,
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
        myGameCanvas.width = myGameCanvas * gameScreenRation;

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