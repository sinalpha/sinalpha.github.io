import { UNIGURI_STATE } from './uniguriState.js'
import { GAME_FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene = scene;

        scene.add.existing(this);
        scene.physics.add.existing(this, 0);
        
    }

}