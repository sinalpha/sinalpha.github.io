export default class BootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "bootloader" });
    }

    preload(){

        this.createBars();
        this.setLoadEvents();
    }

    createBars() {
        this.loadBar = this.add.graphics();
        this.loadBar.fillStyle(0xd40000, 1);
        this.loadBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        );
        this.progressBar = this.add.graphics();
    }
        

    setLoadEvents(){
        // this.load.on(
        //     "progress",

        // )
    }

    
}