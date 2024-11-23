import EventsCenter from './EventsCenter.js';
import DownScene from './DownScene.js'
import { STATE } from '../gameObjects/uniguri-state.js'



export default class Menu extends DownScene {
    constructor(){
        super("menu");
    }

    preload(){
		
		this.setDownScene(0xff0000)
		
    }

    create(){
        this.addButtons();
    }

    addButtons(){

		this.container = this.add.container(0, 0);
        this.buttons = [];
        this.buttonSize = {
            width: this.sceneSize.width / 5,
            height: this.sceneSize.height / 4,
            blankWidth: this.sceneSize.width / 25,
            blankHeight: this.sceneSize.height / 16
        }
        const btnFn = [
            this.activeStatus.bind(this), this.activeClean, this.activeSleep, this.activeWork,
            this.activeStore, this.activeFood.bind(this), this.activePlay, this.activeConcert,
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
		this.scene.launch('status');
		this.scene.pause();
    }

    activeClean(){
        EventsCenter.emit('clean');
    }

    activeSleep(){
        EventsCenter.emit('sleep');
    }

    activeWork(){

    }

    activeStore(){

    }

    activeFood(){
		this.scene.launch('food');
		this.scene.pause();
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