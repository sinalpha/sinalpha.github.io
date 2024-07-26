import { STATE } from '../gameObjects/uniguri-state.js'
import eventsCenter from './eventsCenter.js';
//import Status from './status.js'

export default class Menu extends Phaser.Scene {
    constructor(gameScene){
        super({ key : "menu" });
        this.gameScene = gameScene;
		const gameSceneSize = {
			widht: gameScene.cameras.main.width,
			height: gameScene.cameras.main.height
		};
    }

    preload(){
        this.container = this.add.container(0, 0);
        this.buttons = [];
        this.scene.bringToTop();
        
		this.menuOrigin = {
            x:0,
            y:this.gameSceneSize.height
        };

        this.buttonSize = {
            width: this.gameSceneSize.width / 5,
            height: this.gameSceneSize.height / 4,
            blankWidth: this.gameSceneSize.width / 25,
            blankHeight: this.gameSceneSize.height / 16
        }
    }

    create(){

        this.game = this.game.scene.getScene('game');
        this.setMenuBackground();
        this.setMenuCamera();
        this.addButtons();
    }

    setMenuBackground(){
        this.cameras.main.setBackgroundColor(0xff0000);
    }

    setMenuCamera(){
        this.cameras.main.setViewport(
            0, 
            this.gameSceneSize.height, 
            this.gameSceneSize.width, 
            this.gameSceneSize.height
        );
    }

    
    addButtons(){

        const btnFn = [
            this.activeStatus, this.activeClean, this.activeSleep, this.activeWork,
            this.activeStore, this.activeFood, this.activePlay, this.activeConcert,
            this.activeLib, this.activeBadge, this.activeCredit, this.activeConfig
        ];

        for(let i = 0; i < 12; i++){
            const xi = this.buttonSize.width * ( i % 4 ) + this.buttonSize.blankWidth * ( 1 + (i % 4));
            const yi = this.buttonSize.height * ( Math.floor(i / 4) ) + this.buttonSize.blankHeight * ( 1 + Math.floor(i / 4)); 

            this.buttons[i] = this.createButton(xi, yi, 'testButton');
            this.buttons[i].setInteractive();
            this.buttons[i].on('pointerdown', btnFn[i]);
            this.container.add(this.buttons[i]);
        }
    }

    createButton(x, y, img){
        return this.add.nineslice( x, y, img)
            .setSize(this.buttonSize.width, 200)
            .setOrigin(0, 0);
    }

    activeStatus(){
		this.scene.launch('status', this);
		this.scene.pause('menu');
	
    }

    activeClean(){
        eventsCenter.emit('clean');
    }

    activeSleep(){
        eventsCenter.emit('sleep');
    }

    activeWork(){

    }

    activeStore(){

    }

    activeFood(){

    }

    activePlay(){

    }

    activeConcert(){

    }

    activeLib(){

    }
    
    activeBadge(){

    }

    activeCredit(){

    }

    activeConfig(){

    }

}