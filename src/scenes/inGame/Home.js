import UpScene from "./baseScenes/UpScene.js";

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
        
    }

}