export default class Menu extends Phaser.Scene{

    constructor(){
        super({key:"menu"});
        this.scene.width = this.camera.width / 2;
        this.scene.height = this.camera.height / 2;
        this.scene.bringToTop();
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor(0x111111);
        
    }

}