import { GAME_FIGURES } from './gameFigures.js';

import BootLoader from './scenes/preGame/BootLoader.js';
import Splash from './scenes/preGame/Splash.js'
import Game from './scenes/inGame/Game.js'

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
    mode:Phaser.Scale.NONE,
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

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:gameType,
    parent: gameParent,
    scene: DebugGameScenes,
    scale:gameScale,
    physics:gamePhysics,
}