import { STATE } from '../gameObjects/uniguri-state.js'

export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
        this.game = this.game.scene.getScene('game');
    }

    preload(){
        this.container = this.add.container(0, 0);
        this.buttons = [];
        this.scene.bringToTop();
        this.menuOrigin = {
            x:0,
            y:this.parent.height
        };

        this.buttonSize = {
            width: this.parent.width / 5,
            height: this.parent.height / 4,
            blankWidth: this.parent.width / 25,
            blankHeight: this.parent.height / 16
        }
    }

    create(){

        this.setMenuBackground();
        this.setMenuCamera();
        this.addButtons();
    }

    setMenuBackground(){
        this.cameras.main.setBackgroundColor(0xff0000);
    }

    setMenuCamera(){
        this.cameras.main.setViewport(
            this.parent.x, 
            this.parent.height, 
            this.parent.width, 
            this.parent.height
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

    }

    activeClean(){

    }

    activeSleep(){
        this.game.uniguri.state = STATE["SLEEP"];
        console.log('done');
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