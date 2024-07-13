export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
    }

    preload(){

    }

    create(){

        this.menuOrigin = {
            x:this.parent.x,
            y:his.parent.y
        };

        this.setMenuBackground();
        this.setMenuCamera();
    }

    setMenuBackground(){
        this.cameras.main.setBackgroundColor(0x110011);
    }

    setMenuCamera(){
        this.cameras.main.setViewport(
            this.parent.x, 
            this.parent.y, 
            this.parent.width, 
            this.parent.height
        );
    }
}