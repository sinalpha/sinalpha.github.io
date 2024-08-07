import SceneEffect from "../gameObjects/sceneEffect.js"

export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){
        const {x,y,width,height} = this.cameras.main;
        this.center = {
            x: x+width/2, y: y+height/2
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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

        let img = this.add.image( this.width / 2, this.height / 2, 'background-splash');
        let scaleX = this.width / img.width;
        let scaleY = this.height / img.height;
        let scale = Math.max(scaleX, scaleY);
        img.setScale(scale).setScrollFactor(0);
        this.uniguri = this.add.image(this.center.x, this.center.y,'uniguri-splash');
    }
}