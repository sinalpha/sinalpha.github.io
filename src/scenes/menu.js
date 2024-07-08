export default class Menu extends Phaser.Scene{

    constructor(parent){
        super({key:"menu"});

        this.parent = parent;
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor(0x111111);
        
    }

}