import { GAME_FIGURES } from './gameFigures.js';

import BootLoader from './scenes/BootLoader.js';
import Splash from './scenes/Splash.js'
import Game from './scenes/Game.js'

const isMobile = /Mobi/i.test(window.navigator.userAgent); 
const gameScreenRation = isMobile 
    ? window.innerWidth/window.innerHeight //horizon:vertical
    : GAME_FIGURES["GAME_RATIO"];
const gameScreenSize = { width:  window.innerHeight * gameScreenRation, height:window.innerHeight};

const gameType = Phaser.WEBGL;

const gameParent = "container";

const gameScenes = [BootLoader, Splash, Game];

const DebugGameScenes = [ Game ];

const gameScale = {
    mode:Phaser.Scale.RESIZE,
    autoCenter:Phaser.Scale.CENTER_BOTH,
} 

const gamePhysics = {
    default: 'arcade',
    
    arcade: {
        debug: false,
        gravity: {
            x: 0,
            y: 10
        },
    }
}

const  gamePostBoot = function(game){

    /*
    
        add resize evnet listener
    
    */
    let container = document.getElementById('container');

    window.addEventListener('resize', function(event) {
        
        container.height = window.screen.height;
        container.width = myGameCanvas.height * gameScreenRation;

    }, true);
    
}

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:gameType,
    parent: gameParent,
    scene: DebugGameScenes,
    scale:gameScale,
    physics:gamePhysics,
    postBoot:gamePostBoot
}