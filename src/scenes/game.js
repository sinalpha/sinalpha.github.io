import Menu from "./menu.js"
//debug
import Status from "./status.js"
import Uniguri from "../gameObjects/uniguri.js"
import eventsCenter from "./eventsCenter.js";
import { STATE } from "../gameObjects/uniguri-state.js"
import { FIGURES } from "../gameFigures.js"

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
        this.setGameBackground();
        this.createMenu();
        this.addObjects();
        this.addEvent();
		this.scene.launch('status', this);
    }

    update(){
       this.checkTiredness();
    }
    
    adjustCamera(){
        
        this.cameras.main.width = this.bound.width;
        this.cameras.main.height = this.bound.height;      
    
    }
    
    setWorld(){
        this.physics.world.gravity.y = FIGURES['GAME_GRAVITY'];
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

    addObjects(){
        this.addPoopGenerator();
        this.addUniguri();
    }

    addPoopGenerator(){

    }
    
    addUniguri(){
        this.uniguri = new Uniguri(this, 0, this.bound.height, this.bound).setOrigin(0, 1);
        this.uniguri.setCollideWorldBounds(true);
    }

    addEvent(){
        eventsCenter.on('sleep', this.detectSleep, this);
        eventsCenter.on('clean', this.uniguri.clean.bind(this.uniguri), this);
    }

    detectSleep(){
        this.uniguri.state = STATE["SLEEP"];
        this.uniguri.updateState();
    }

    checkTiredness(){
            if(this.uniguri.tiredness <= 0){
                this.uniguri.state = STATE["SLEEP"];
                this.uniguri.updateState();
            }
    }
}