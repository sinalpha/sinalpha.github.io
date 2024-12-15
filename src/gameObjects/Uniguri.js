import { UNIGURI_STATE } from './uniguriState.js'
import { GAME_FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene = scene;
        this.preTime = 0;


        scene.add.existing(this);
        scene.physics.add.existing(this, 0);

    }

    preUpdate(){
        this.setCollideWorldBounds(true);
        this.addMove();
    }

    addMove(){

        this.scene.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.setVeloctyX(10);
            },
            loop: true,
        });
    
    }
}