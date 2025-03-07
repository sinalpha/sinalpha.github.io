import Home from './Home.js';
import Menu from './Menu.js';
import EventsCenter from "./EventsCenter.js";


export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

    }

    init(){

        this.divideGameScreen();
        this.addResizeEventListner()

    }

    preload(){
        
    }

    create(){
		
    }

    update(){
      
    }
    
    divideGameScreen(){
     
        const gameScreenSize = this.scale.gameSize;
        const ratioOfScreen = { up:3/5, down:2/5 };
        const upScreenSize = { width:gameScreenSize.width, height:gameScreenSize.height * ratioOfScreen.up }; 
        const downScreenSize = { width:gameScreenSize.width, height: gameScreenSize.height * ratioOfScreen.down };
    
        this.game.scene.add("Home", Home, true, {screenSize : upScreenSize});
        this.game.scene.add("Menu", Menu, true, {screenSize : downScreenSize});
    
    }

    addResizeEventListner(){

        this.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {
            
            const parentSize = this.scale.parentSize;
            
            if(gameSize.width != parentSize.width && gameSize.height != parentSize.height){

                this.scale.setGameSize(parentSize.width, parentSize.height);
                
            }

        }.bind(this));
    
    }
}