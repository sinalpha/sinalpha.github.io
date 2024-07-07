export default class BootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "bootloader" });
    }

    preload(){

        this.createBars();
        this.setLoadEvents();
        this.loadFonts();
        this.loadImages();
        this.loadAudios();
        this.loadSpritesheets();
        this.setRegistry();
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
                this.scene.start("splash");
            },
            this
        );
    }

    loadFonts(){

    }

    loadImages(){
        this.load.image("uniguri-splash", "../../assets/img/uniguri-splash.png");
        this.load.image("background-splash", "../../assets/img/background-splash.png");
    }

    loadAudios(){

    }

    loadSpritesheets(){

    }

    setRegistry(){
        this.registry.set("anger", 0);
        this.registry.set("happiness", 0);
        this.registry.set("coin", 0);
        this.registry.set("red", 0);
        this.registry.set("yellow", 0);
        this.registry.set("blue", 0);
        this.registry.set("black", 0);
        this.registry.set("white", 0);
        this.registry.set("purple", 0);
        this.registry.set("hunger", 0);
        this.registry.set("tiredness", 0);
        this.registry.set("21-22", false);
        this.registry.set("22-23", false);
        this.registry.set("23-24", false);
        
    }
}