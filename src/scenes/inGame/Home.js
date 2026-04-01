import UpScene from "./baseScenes/UpScene.js";
import Uniguri from './gameObjects/Uniguri.js';

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data);
        
        this.physics.world.setBounds(0, 0, 
            this.size.width,
            this.size.height);

    }

    create(){
        
        this.createUniguri();
        
    }

    createUniguri(){

        this.uniguri = this.add.existing(new Uniguri(
            this,
            this.size.width / 2,
            this.size.height,
            'uniguri-default'));
        
    }

}