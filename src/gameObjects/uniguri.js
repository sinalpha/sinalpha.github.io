import { STATE } from './uniguri-state.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        this.tiredness = 10;
        this.state = STATE["WAKE"]
        this.isSleep = false;

        scene.physics.add.existing(this);
        scene.add.existing(this);
    }

    create(){
    }

    updateState(){

        switch(this.state){
            case STATE["WAKE"]:
                this.setWakeState();
                break;
            case STATE["SLEEP"]:
                this.setSleepState();
                break;
        }

    }

    setWakeState(){
        this.setTexture("uniguri-default");
        this.setSize();
    }

    setSleepState(){

        if(!isSleep){
            isSleep = true;
            this.setTexture("uniguri-sleep");
            this.setSize(80, 100);

            this.scene.sleepTimer = this.scene.time.addEvent({
                callback: ()=>{ 
                    this.tiredness++;
                    this.updateState();
                },
                delay: 10000,
                loop: true
            })
        }

        if ( this.tiredness == 10 ){
            this.isSleep = false;
            this.state = STATE["WAKE"];
        }

 


    }

    clean(){
        tiredness--;
    }
}