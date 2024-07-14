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

        // for(let j = 0; j < 4; j++){
        //     for(let k = 0; k < 16; k++){
        //         const xi = this.buttonSize.width * ( i % 4 ) + this.buttonSize.blankWidth * ( 1 + (i % 4)) 
        //         const 

        //         this.addButtons.push(
        //             this.createButton(xi, yi, 'testButton'));
        //     }
        // }
        this.buttons[0] = this.createButton(0, 0, 'testButton');
        this.container.add(this.buttons[0]);

    }

    
    createButton(x, y, img){
        return this.add.nineslice( x, y, img)
            .setSize(this.buttonSize.width, this.buttonSize.width)
            .setOrigin(0, 0);
    }
}