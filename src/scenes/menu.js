export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
    }

    preload(){
        this.container = this.add.container(this.parent.width, 0);
        this.buttons = [];
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
        


        // this.buttons.push(this.createButton(
        //     0,
        //     0, 
        //     'testButton'));
        this.buttons.push(
            this.add.nineslice( 0, 0, 'testButton'));
        this.buttons[0].setSize(
            this.buttonSize.width,
            this.buttonSize.height).setOrigin(0,0);

        this.container.add(this.buttons[0]);
    }

    
    createButton(x, y, img){
        return this.add.nineslice(x, y, 
            this.buttonSize.width,
            this.buttonSize.height,
            img,
            24
        ).setOrigin(1, 0);
    }
}