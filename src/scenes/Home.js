import UpScene from "./UpScene.js";
import Uniguri from "../gameObjects/Uniguri.js"

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
        this.uniguri = new Uniguri(this, 100, 100, 'uniguri-default');
    }


}