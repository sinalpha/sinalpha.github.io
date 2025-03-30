import UpScene from "./baseScenes/UpScene.js";

import Uniguri from './gameObjects/Uniguri.js';

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        
        this.physics.world.setBounds(0, 0, 
            this.upSceneScreenSize.width,
            this.upSceneScreenSize.height);

    }

    create(){
        
        this.createUniguri();

    }

    createUniguri(){

        const uniguri = this.existing(new Uniguri);
        this.physics.add.existing(uniguri, 0);
        uniguri.setCollideWorldBounds(true);

    }

}