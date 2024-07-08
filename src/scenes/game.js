export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
    }

    preload(){


        this.menu = this.add.zone(0, this.scene.height / 2, this.scene.width, this.scene.height).setInteractive().setOrigin(0);

    }

    create(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
    }

    update(){

    }

}