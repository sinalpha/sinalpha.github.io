import { STATE } from './uniguri-state.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        this.tiredness = 10;
        this.state = STATE["WAKE"]

        scene.physics.add.existing(this);
        scene.add.existing(this);
    }

    create(){
    }

    update(){

        switch(this.state){
            case STATE["WAKE"]:
                this.wake();
                console.log("wake");
                break;
            case STATE["SLEEP"]:
                console.log("sleep");
                this.sleep();
                break;
        }

    }

    wake(){

    }

    sleep(){
        console.log("sleep");
        this.setTexture("uniguri-sleep");
    }
}