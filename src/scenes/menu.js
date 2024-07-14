export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
    }

    preload(){
        this.buttons = {}
        this.scene.bringToTop();
    }

    create(){

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
        
        const testButton = {
            key: 'testButton1',
            frames: 'testButton-sptrite',
            frameRate: 20,
            repeat: -1
        };

        this.buttons.push(this.createButton(
            this.menuOrigin.x, this.menuOrigin.y, 'testButton', 'testButton1'));

    }
    
    createButton(x, y, img, frame){
        return new Phaser.GameObjects.NineSlice(this, x, y, img, frame,
            this.buttonSize.width,
            this.buttonSize.height
        );
    }
}