import { GAME_PATHS } from "../../gamePaths.js";

export default class BootLoader extends Phaser.Scene {
    constructor() {
        super({ key: "Bootloader" });
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
                this.scene.start("Splash");
            },
            this
        );
    }

    loadFonts(){

    }

    loadImages(){

        this.load.image("uniguri-default", GAME_PATHS["IMAGE_ASSETS"] + "uniguri-default.png");
        this.load.image("uniguri-splash", GAME_PATHS["IMAGE_ASSETS"] + "uniguri-splash.png");
        this.load.image("uniguri-sleep", GAME_PATHS["IMAGE_ASSETS"] +  "uniguri-sleep.png");
        this.load.image("poop", GAME_PATHS["IMAGE_ASSETS"] + "poop.png")
        this.load.image("background-splash", GAME_PATHS["IMAGE_ASSETS"] + "background-splash.png");
        this.load.image("testButton", GAME_PATHS["IMAGE_ASSETS"] + "testbutton.png");
        
    }

    loadAudios(){
    }

    loadSpritesheets(){
    }

    setRegistry(){
        
    }
}