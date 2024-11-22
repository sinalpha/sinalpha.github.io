import { gameScenes } from './gameScenes.js'
import { gameScale } from './gameScale.js'
import { gamePhysics } from './gamePhysics.js'

const gameScreenSize = { width:window.innerWidth , height:window.innerHeight };
const gameParent = "container";

export const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:Phaser.WEBGL,
    parent: gameParent,
    scene: gameScenes,
    scale:gameScale,
    physics: gamePhysics
}