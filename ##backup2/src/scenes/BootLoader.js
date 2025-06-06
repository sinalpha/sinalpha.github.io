export default class BootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "Bootloader" });
    }

    preload(){

        this.addResizeEventListner();
        this.createBars();
        this.setLoadEvents();
        this.loadFonts();
        this.loadImages();
        this.loadAudios();
        this.loadSpritesheets();
        this.setRegistry();
        
    }

    addResizeEventListner(){

        this.scale.on('resize', function(gameSize, baseSize, displaySize, previousWidth, previousHeight) {
            
            const parentSize = this.scale.parentSize;
            
            if(gameSize.width != parentSize.width && gameSize.height != parentSize.height){

                this.scale.setGameSize(parentSize.width, parentSize.height);
                
            }

        }.bind(this));
    
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
        
    setLoadEvents() {
        this.load.on(
            "progress",
            function (value) {
                this.progressBar.clear();
                this.progressBar.fillStyle(0x0088aa, 1);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                ) ;
            },
            this
        );
        
        this.load.on(
            "complete",
            () => {
                this.scene.start("Splash");
            },
            this
        );
    }

    loadFonts(){

    }

    loadImages(){
        this.load.image("uniguri-default", "../../assets/img/uniguri-default.png");
        this.load.image("uniguri-splash", "../../assets/img/uniguri-splash.png");
        this.load.image("uniguri-sleep", "../../assets/img/uniguri-sleep.png");
        this.load.image("poop", "../../assets/img/poop.png")
        this.load.image("background-splash", "../../assets/img/background-splash.png");
        this.load.image("testButton", "../../assets/img/testbutton.png");
    }

    loadAudios(){
    }

    loadSpritesheets(){
    }

    setRegistry(){
        
    }
}