import Home from './Home.js';
import Menu from './Menu.js';

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

    }

    init(){

        this.initScreenSize();
        this.divideGameScreen();
        this.addResizeEventListner()
        console.log("added Event Listenr");
    }

    preload(){
        
    }

    create(){
		
    }

    update(){
      
    }
    
    initScreenSize(){

        this.gameScreenSize = this.scale.gameSize;
        this.ratioOfScreen = { up:3/5, down:2/5 };
        this.upScreenSize = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * this.ratioOfScreen.up }; 
        this.downScreenSize = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * this.ratioOfScreen.down };
    
    }

    divideGameScreen(){
    
        this.game.scene.add("Home", Home, true, {screenSize : this.upScreenSize});
        this.game.scene.add("Menu", Menu, true, {screenSize : this.downScreenSize});
    
    }


    addResizeEventListner(){

        this.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {
            
            const parentSize = this.scale.parentSize;
            
            if(gameSize.width != parentSize.width && gameSize.height != parentSize.height){

                this.scale.setGameSize(parentSize.width, parentSize.height);
                
                console.log("detect resize from Game.js");
            }

        }.bind(this));
    
    }
}