import UpScene from "./UpScene.js";
import Uniguri from "../gameObjects/Uniguri.js"

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        this.uniguri = new Uniguri(this, 0, 0).setOrigin(0, 1);

    }

    preload(){

    }

    create(){

    }


}