export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
    }

    preload(){


        this.menuZone = this.add.zone(0, this.scene.height / 2, this.scene.width, this.scene.height).setInteractive().setOrigin(0);
        this.scene.launch("menu", this.menuZone);

    }

    create(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
    }

    update(){

    }

}