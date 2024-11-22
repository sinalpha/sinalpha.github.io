import { game_scenes } from './gameScenes.js'
import { game_scale } from './gameScale.js'
import { game_physics } from './gamePhysics.js'

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