import { UNIGURI_STATE } from './uniguriState.js'
import { GAME_FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
		this.isDoing = false;

        scene.physics.add.existing(this);
        scene.add.existing(this);

        
    }

}