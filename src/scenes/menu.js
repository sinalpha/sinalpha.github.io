export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
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

    }

    
    createButton(x, y, img){
        
    }
}