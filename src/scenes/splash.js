import SceneEffect from "../gameObjects/sceneEffect.js"

export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x: x+width/2, y: y+height/2
        }
    }

    create(){

        this.setBackground();
        this.startTrigger();

    }

    update(){
    }

    startTrigger(){
        this.input.once('pointerdown', () => {
            new SceneEffect(this).simpleClose(this.startGame.bind(this));
        });
    }

    startGame() {
        this.time.delayedCall(500, () => this.scene.start("game"), null, this);
    }

    setBackground(){
        this.background = this.add.tileSprite(x,y,width,height,'background-splash')
            .setOrigin(0)
            .setScrollFactor(0,1);
        this.background.width = width;
        this.background.height = height;
        this.uniguri = this.add.image(center.x,center.y,'uniguri-splash');
    }
}