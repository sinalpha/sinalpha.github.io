export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){

    }

    create(){

        this.cameras.main.setBackgroundColor(0x000000);

        this.input.keyboard.on("keydown-SPACE", this.startGame, this);
    }

    update(){
        
    }

    startGame(){
        this.scene.start("game");
    }
}