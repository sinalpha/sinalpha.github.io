import Menu from "./menu.js"

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
    }

    preload(){
    
    }

    create(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
        this.divideScreen();
        
    }

    update(){

    }

    divideScreen(){
        
        //set physics bound
        const bound = { 
            height:this.cameras.main.height / 2,
            width:this.cameras.main.width / 2
        };
        this.physics.world.setBounds(
            0, 0, bound.width, bound.height
        );

        //create menu
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
    
        this.menu = new Menu(this.menuZone);

        this.scene.add("menu", this.menu, true);
    }
}