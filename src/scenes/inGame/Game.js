import Home from './Home.js';
import Menu from './Menu.js';
import { GAME_FIGURES } from '../../gameFigures.js';

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

    }

    init(){

        this.initScreenSize();
        this.divideGameScreen();
        this.addResizeEventListner()

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

        this.runningUpScene = this.game.scene.add("Home", Home, true, {screenSize : this.upScreenSize});
        this.runningDownScene = this.game.scene.add("Menu", Menu, true, {screenSize : this.downScreenSize});
    
    }


    addResizeEventListner(){

        this.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {
            
            if (baseSize.width != previousWidth){
                console.log(gameSize);
                console.log(baseSize);
                console.log(displaySize);
                this.scale.setGameSize( baseSize.height * GAME_FIGURES["GAME_RATIO"], baseSize.height);
                console.log(gameSize);
                console.log(baseSize);
                console.log(displaySize);
            }

        }.bind(this));
    
    }
}