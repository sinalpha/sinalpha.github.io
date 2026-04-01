import Home from './Home.js';
import Menu from './Menu.js';
import Status from './Status.js'

import { GAME_FIGURES } from '../../gameFigures.js';

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

        this.runningScene = { 
            Up      : {
                scene : null,
                size : { width : 0, height : 0}
            }, 
            Down    : {
                scene : null,
                size : { width : 0, height : 0}
            }
        };

    }

    init(){

        this.separateScreen();
        
    }

    separateScreen(){

        this.gameScreenSize = this.scale.gameSize;
        this.runningScene.Up.size = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * GAME_FIGURES["UP_SCREEN_RATIO"] }; 
        this.runningScene.Up.scene = this.game.scene.add("Home", Home, true, this.runningScene.Up.size);
        this.runningScene.Down.size = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * GAME_FIGURES["DOWN_SCREEN_RATIO"] };
        this.runningScene.Down.scene = this.game.scene.add("Menu", Menu, true, this.runningScene.Down.size);  

    }



}