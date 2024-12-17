import { UNIGURI_STATE } from './uniguriState.js'
import { GAME_FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene = scene;

        scene.add.existing(this);
        scene.physics.add.existing(this, 0);

    }

    preUpdate(){
        this.setCollideWorldBounds(true);
        this.addMove();
    }

    addMove(){

        this.scene.time.addEvent({
            delay: GAME_FIGURES["MOVE_TIME"],
            callback: ()=>{

                const speed = Phaser.Math.Between(
                -GAME_FIGURES["MAX_MOVE_ABS_SPEED"], 
                GAME_FIGURES["MAX_MOVE_ABS_SPEED"]
                )

                this.setVelocityX(speed);


                console.log("test");
            },
            loop: true,
        });
    
    }
}