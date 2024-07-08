export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
    }

    preload(){
    
    }

    create(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
        this.createMenu();
    }

    update(){

    }

    createMenu(){
        const menuSize = { height:this.cameras.main.height / 2, width:this.cameras.main.widht / 2};
        this.menuZone = this.add.zone(0, menuSize.height, menuSize.width, menuSize.height ).setInteractive().setOrigin(0);
        this.scene.launch("menu", this.menuZone);
    }
}