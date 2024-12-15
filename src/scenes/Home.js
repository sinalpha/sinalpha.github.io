import UpScene from "./UpScene.js";
import Uniguri from "../gameObjects/Uniguri.js"
import { GAME_FIGURES } from "../../gameFigures.js"

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        
        this.physics.world.setBounds(0, 0, 
            this.upSceneScreenSize.width,
            this.upSceneScreenSize.height);
        
        



    }

    preload(){

    }

    create(){
        
        this.addOBJs();

    }

    addOBJs(){

        /*
        
            add Uniguri.

        */
        this.uniguri = new Uniguri(
            this,
            this.upSceneScreenSize.width / 2,
            this.upSceneScreenSize.height,
            'uniguri-default')
        .setOrigin( 0.5, 1);


    
    }


}