import { UNIGURI_STATE } from './uniguriState.js'
import { GAME_FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene = scene;

        scene.add.existing(this);
        scene.physics.add.existing(this, 0);

        this.setCollideWorldBounds(true);
        this.addMove();
    }

    preUpdate(){

    }

    addMove(){


        this.scene.add.timeline([
            {
                at: 0,
                run: () => {

                    const speed = Phaser.Math.Between(
                        -GAME_FIGURES["MAX_MOVE_ABS_SPEED"],
                        GAME_FIGURES["MAX_MOVE_ABS_SPEED"]
                    )

                    this.setVelocityX(speed)

                }
            },
            {
                at:GAME_FIGURES["MOVE_TIME"],
                stop:true
            }
        ]).repeat().play();
    
    }
}