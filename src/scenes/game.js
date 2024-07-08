import Menu from "./menu.js"
import Uniguri from "../gameObjects/uniguri.js"

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });


    }

    preload(){
        
    }

    create(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
        this.divideScreen();
        this.physics.world.setBounds(
            0, 0, this.bound.width, 100
        );

        this.uniguri = new Uniguri(this, this.cameras.main.width / 2, 0);
    }

    update(){

    }

    divideScreen(){

        this.bound = { 
            height:this.cameras.main.height / 2,
            width:this.cameras.main.width
        };
        
        this.menuSize = this.bound;
        
        //set game scene camera
        this.cameras.main.width = this.bound.width;
        this.cameras.main.height = this.bound.height;      


        //create menu
        this.menuZone = this.add.zone(
            0,
            this.menuSize.height,
            this.menuSize.width,
            this.menuSize.height
        ).setInteractive().setOrigin(0);
    
        this.menu = new Menu(this.menuZone);

        this.scene.add("menu", this.menu, true);
    
    }
}