import Menu from "./menu";

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
        
        const menuSize = { 
            height:this.cameras.main.height / 2,
            width:this.cameras.main.width / 2
        };
        
        this.menuZone = this.add.zone(
            0,
            menuSize.height,
            menuSize.width,
            menuSize.height
        ).setInteractive().setOrigin(0);
        
        this.menu = new Phaser.Scene('menu', this.menu);
        
        this.scene.add("menu", this.menu, true);
    }
}