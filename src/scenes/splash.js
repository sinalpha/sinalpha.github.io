import SceneEffect from "../gameObjects/sceneEffect.js"

export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){

    }

    create(){
        const {x,y,width,height} = this.cameras.main;
        this.background = this.add.tileSprite(x,y,width,height,'background-splash').
        setOrigin(0).setScrollFactor(0,1);
        const center = {
            x: x+widht/2, y: y+height/2
        }
        this.uniguri = this.add.image(center.x,center.y,'uniguri-splash');

        this.input.keyboard.on("keydown-SPACE", this.startGame, this);
    }

    update(){
        
    }

    startGame(){
        this.scene.start("game");
    }
}