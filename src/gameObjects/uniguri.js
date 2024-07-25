import { STATE, MOVINGDIRC } from './uniguri-state.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        this.sceneSize = {
            x:scene.camera.main.width,
            y:scene.camera.main.height
        }
        this.tiredness = 10;
        this.state = STATE["WAKE"]
        this.isDoing = false;
        this.movingDirc = MOVINGDIRC["RIGHT"];

        scene.physics.add.existing(this);
        scene.add.existing(this);
    }

    create(){
    }

    updateMove(){

        if(this.isDoing){
            //debug
            console.log("is doing something");
            return;
        }

        this.scene.physics.moveTo(
            this,
            Phaser.Math.Between(40, this.sceneSize.x - 40),
            this.getCenter.y,
            Phaser.Math.Between(1, 40)
        );
        
    }

    stopMove(){
        this.setVelocityX(0);
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
        this.stopMove();

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