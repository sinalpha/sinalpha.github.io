import SceneEffect from "../gameObjects/sceneEffect.js"

export default class Splash extends Phaser.Scene {
    constructor(){
        super({ key : "splash" });
    }

    preload(){

    }

    create(){
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;
        this.cameras.main.setBackgroundColor(0x000000);
        this.physics.add.sprite(640, 450, 'uniguri-splash')

        this.input.keyboard.on("keydown-SPACE", this.startGame, this);
    }

    update(){
        
    }

    startGame(){
        this.scene.start("game");
    }
}