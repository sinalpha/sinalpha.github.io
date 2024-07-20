import STATE from './uniguri-state.js'

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

    preupdate(){

        switch(this.state){
            case STATE["WAKE"]:
                this.wake();
                break;
            case STATE["SLEEP"]:
                this.sleep();
                break;
        }

    }

    wake(){

    }

    sleep(){
        this.setTexture("uniguri-sleep");
    }
}