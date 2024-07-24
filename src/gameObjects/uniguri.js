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


        if (this.tiredness >= 10)
            return;

        this.setTexture("uniguri-sleep");
        this.setSize(80, 100);

        this.scene.sleepTimer = this.scene.time.addEvent({
            callback: ()=>{
                //왜 600이 더해지는지 모르겠음.
                this.tiredness-=600;
                this.tiredness--;

                if (this.tiredness >= 10){
                    this.scene.sleepTimer.destroy();
                    this.state = STATE["WAKE"];
                }
            },
            delay: 10000,
            loop: true
        });

    }

    clean(){
    
        this.tiredness--;
    }


}