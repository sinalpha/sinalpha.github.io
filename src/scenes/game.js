import Menu from "./menu.js"
import Uniguri from "../gameObjects/uniguri.js"

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
    }

    preload(){
        this.bound = { 
            height:this.cameras.main.height / 2,
            width:this.cameras.main.width
        };

        this.menuSize = this.bound;
    }

    create(){
        
        this.adjustCamera();
        this.setWorld();
        this.addUniguri();
        this.setGameBackground();
        this.createMenu();

    }

    update(){
    }
    
    adjustCamera(){
        
        this.cameras.main.width = this.bound.width;
        this.cameras.main.height = this.bound.height;      
    
    }
    
    setWorld(){
        this.physics.world.gravity.y = 150;
        this.physics.world.setBounds(
            0, 0, this.bound.width, this.bound.height
        );
    }

    createMenu(){
        this.menuZone = this.add.zone(
            0,
            0,
            this.menuSize.width,
            this.menuSize.height
        ).setInteractive().setOrigin(0);
        
        this.menu = new Menu(this.menuZone);

        this.scene.add("menu", this.menu, true);
    }

    setGameBackground(){
        this.cameras.main.setBackgroundColor(0x87ceeb);
    }
    
    addUniguri(){
        this.uniguri = new Uniguri(this, 100, 100);
        this.uniguri.setCollideWorldBounds(true);
    }

}