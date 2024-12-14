import UpScene from "./UpScene.js";
import Uniguri from "../gameObjects/Uniguri.js"

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        this.uniguri = new Uniguri(this, 100, 100, 'uniguri-default');



    }

    preload(){

    }

    create(){

    }


}