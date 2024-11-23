import Home from './Home.js';
import Menu from './Menu.js';
import EventsCenter from "./EventsCenter.js";


export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

    }

    init(){

       this.divideGameScreen();

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
    
        this.game.scene.add("Home", new Home(), true, {screenSize : upScreenSize});
        //this.game.scene.add("Menu", new Menu(), true, {screenSize : downScreenSize});
    
    }
}