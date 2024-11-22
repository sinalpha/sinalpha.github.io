const gameScreenSize = { width:window.innerWidth , height:window.innerHeight };

/*

    a parent of a canvas that is our game.

*/
const gameParent = "container";

/*

    config game Scenes

 */
import Splash from './scenes/splash.js';
import Game from './scenes/game.js';
import BootLoader from './scenes/bootLoader.js';
import Status from './scenes/status.js';
import Menu from './scenes/menu.js';
import Food from './scenes/food.js';
let gameScenes = [Splash, Game, BootLoader, Status, Menu, Food];

/*

    config scale.

*/
const gameScale = {
    mode:Phaser.Scale.FIT,
    autoCenter:Phaser.Scale.CENTER_BOTH,
}

/*

    config physics.

*/
const gamePhysics = {
    default: 'arcade',
    arcade: {
        debug: false
    }
}

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:Phaser.WEBGL,
    parent: gameParent,
    scene: gameScenes,
    scale:gameScale,
    physics: gamePhysics
}