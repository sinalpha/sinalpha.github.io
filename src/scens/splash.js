export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }


    create(){
        this.input.keyboard.on("keydown-SPACE", this.startGame, this);
    }

    startGame(){
        this.scene.start("game");
    }
}