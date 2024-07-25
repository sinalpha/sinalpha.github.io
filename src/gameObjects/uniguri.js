import { STATE, MOVINGDIRC } from './uniguri-state.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, sceneSize){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        this.sceneSize = sceneSize;
        this.tiredness = 10;
        this.nextMoveTime = 2000;
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
        this.TirednessTimer = this.scene.time.addEvent({
            callback: ()=>{ 
                //debug
                console.log("dec");
                this.tiredness-- },
            delay: 30000,
            loop:true
        });
    }

    updateMove(){

        if(this.isDoing){
            //debug
            console.log("is doing something");
            return;
        }

        this.nextMoveTime = Phaser.Math.Between(5000, 10000);
        this.scene.physics.moveTo(
            this,
            Phaser.Math.Between(0, this.sceneSize.width),
            0,
            Phaser.Math.Between(1, 40),
            this.nextMoveTime
        );
        this.setVelocityY(0);

        this.setMoveTimer(this.nextMoveTime);
    }

    stopMove(){
        this.setVelocityX(0);
    }

    stopTirednessTimer(){
        this.tirednessTimer.destroy();
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
        if (this.tiredness >= 10){
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
                this.tiredness+=1;

                if (this.tiredness >= 10){
                    this.unsetSleepState();
                }
            },
            delay: 10000,
            loop: true
        });

    }

    unsetSleepState(){
        this.scene.sleepTimer.destroy();
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

        this.tiredness-=1;
        
        //debug
        console.log(this.tiredness);
    }


}