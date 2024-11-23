import EventsCenter from "./EventsCenter.js";

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });

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
        const upScreenSize = { widht:gameScreenSize.width, height:gameScreenSize.height * ratioOfScreen.up }; 
        const downScreenSize = { widht:gameScreenSize.width, height: gameScreenSize.height * ratioOfScreen.down };
    
        this.scene.launch('Home');
        this.scene.launch('Menu');
    
    }
}