import SceneEffect from "../gameObjects/sceneEffect.js"

export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){

    }

    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x: x+width/2, y: y+height/2
        }

        //add sprite
        this.background = this.add.tileSprite(x,y,width,height,'background-splash')
            .setOrigin(0)
            .setScrollFactor(0,1);
        this.uniguri = this.add.image(center.x,center.y,'uniguri-splash');

        //scene change trigger
        this.input.once('pointerdown', ()=>{new SceneEffect(this).simpleClose(this.startGame.bind(this));}, this );

    }

    update(){
        
    }

    startGame() {
        this.scene.start("game");
    }
}