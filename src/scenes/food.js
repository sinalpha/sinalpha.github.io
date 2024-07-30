import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");
	}
	
	preload(){}
	
	create(){
		this.setSubScene(0xffff00);
		this.addCloseBtn();
		this.input.on("drag", this.scrollCamera);
	}
	
	scrollCamera(event){

		console.log(event.dragY);
	}
}