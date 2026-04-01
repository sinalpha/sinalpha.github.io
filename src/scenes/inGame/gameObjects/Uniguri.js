import { GAME_FIGURES } from '../../../gameFigures.js'
import Normal from './Stand.js'
import Move from './Move.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene = scene;
        this.state = new Normal;

        //set Physics
        this.scene.physics.add.existing(this, 0);
        this.setCollideWorldBounds(true);
    



        

    }


    handleInput(){
        this.state.handleInput(this);
    }

    update(){
        this.state.update(this);
    }

}