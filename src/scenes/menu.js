export default class Menu extends Phaser.Scene {
    constructor(parent){
        super({ key : "menu" });
        this.parent = parent;
    }

    preload(){
        this.scene.bringToTop();
    }

    create(){

        this.menuOrigin = {
            x:this.parent.x,
            y:this.parent.y
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
            this.parent.y, 
            this.parent.width, 
            this.parent.height
        );
    }

    
    addButtons(){
        buttons = [
            this.reateButton('status','testbutton'),
            this.createButton('clean','testbutton'),
            this.createButton('sleep','testbutton'),
            this.createButton('work','testbutton'),
            this.createButton('shop','testbutton'),
            this.createButton('food','testbutton'),
            this.createButton('play','testbutton'),
            this.createButton('concert','testbutton'),
            this.createButton('lib','testbutton'),
            this.createButton('badge','testbutton'),
            this.createButton('credit','testbutton'),
            this.createButton('config','testbutton'),
        ];

        for (let i = 0; i < 9; i++){
            buttons[i].setPosition(
                this.menuOrigin.x + this.buttonSize.blankWidth,
                this.menuOrigin.y + this.buttonSize.blankHeight
            );
        }

    }
    
    createButton(name, img){
        return  this.add.nineslice(this.buttonSize.width, this.buttonSize.height,
            name, img);
    }
}