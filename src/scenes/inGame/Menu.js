import DownScene from './baseScenes/DownScene.js'
import Button from './gameObjects/Button.js'

export default class Menu extends DownScene {
    
    init(data){
        
        this.setCameraViewPort(data);

        this.buttons = {
            food : new Button(this, this.center.x - 120, this.center.y, "button-food"),
            sleep : new Button(this, this.center.x, this.center.y, "button-sleep"),
            status : new Button(this, this.center.x + 120, this.center.y, "button-status")
        };

    }

    preload(){

    }

    create(){
    
    }


}