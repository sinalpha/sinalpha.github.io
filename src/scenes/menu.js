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
            createButton('status','testbutton'),
            createButton('clean','testbutton'),
            createButton('sleep','testbutton'),
            createButton('work','testbutton'),
            createButton('shop','testbutton'),
            createButton('food','testbutton'),
            createButton('play','testbutton'),
            createButton('concert','testbutton'),
            createButton('lib','testbutton'),
            createButton('badge','testbutton'),
            createButton('credit','testbutton'),
            createButton('config','testbutton'),
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