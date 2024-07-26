import { STATE, MOVINGDIRC } from './uniguri-state.js'
import { FIGURES } from '../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, sceneSize){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        this.sceneSize = sceneSize;
        this.tiredness = FIGURES['MAX_TIREDNESS'];
        this.nextMoveTime = FIGURES['FIRST_MOVE_TIME'];
        this.state = STATE["WAKE"]
        this.isDoing = false;

        scene.physics.add.existing(this);
        scene.add.existing(this);

        this.create();
    }

    create(){
        this.resumeAll();
    }

    setMoveTimer(time){

        this.scene.moveTimer = this.scene.time.addEvent({
            callback: this.updateMove.bind(this),
            delay: time,
        });
    }

    setTirednessTimer(){
        this.scene.tirednessTimer = this.scene.time.addEvent({
            callback: ()=>{ 
                this.tiredness-- },
            delay: FIGURES['DEC_TIREDNESS_TIME'],
            loop:true
        });
    }

    updateMove(){

        if(this.isDoing){
            //debug
            console.log("is doing something");
            return;
        }

        this.nextMoveTime = Phaser.Math.Between(FIGURES['MIN_MOVE_TIME'], FIGURES['MAX_MOVE_TIME']);
        this.scene.physics.moveTo(
            this,
            Phaser.Math.Between(0, this.sceneSize.width),
            0,
            Phaser.Math.Between(FIGURES['MIN_MOVE_SPEED'], FIGURES['MAX_MOVE_SPEED']),
            this.nextMoveTime
        );
        this.setVelocityY(0);

        this.setMoveTimer(this.nextMoveTime);
    }

    stopMove(){
        this.setVelocityX(0);
    }

    stopTirednessTimer(){
        this.scene.tirednessTimer.remove();
    }

    stopAll(){
        this.stopMove();
        this.stopTirednessTimer();
    }

    resumeAll(){
        this.setMoveTimer(this.nextMoveTime);
        this.setTirednessTimer();
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


        //check uniguri state
        if (this.tiredness >= FIGURES['MAX_TIREDNESS']){
            //debug
            console.log("tiredness is max");
            return;
        }
        if (this.isDoing){
            //debug
            console.log("already doing something");
            return 
        }

        //
        this.isDoing = true;
        this.setTexture("uniguri-sleep");
        this.setSize(80, 100);
        this.stopAll();

        //fullfill tiredness
        this.scene.sleepTimer = this.scene.time.addEvent({
            callback: ()=>{
                this.tiredness+=FIGURES['CHARGED_TIREDNESS'];

                if (this.tiredness >= FIGURES['MAX_TIREDNESS']){
                    this.unsetSleepState();
                }
            },
            delay: FIGURES['SLEEP_TIME'],
            loop: true
        });

    }

    unsetSleepState(){
        this.scene.sleepTimer.remove();
        this.state = STATE["WAKE"];
        this.isDoing = false;
        this.updateState();
        this.resumeAll();
    }

    clean(){
    
        if(this.isDoing){
            //debug
            console.log("already doing something");
            return
        }

        this.tiredness-=FIGURES['DECREASED_TIREDNESS'];
        
        //debug
        console.log(this.tiredness);
		
    }


}