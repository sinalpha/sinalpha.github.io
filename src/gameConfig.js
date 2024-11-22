import { gameScenes } from './gameScenes.js'

const gameScreenSize = { width:window.innerWidth , height:window.innerHeight };
const gameParent = "container";
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