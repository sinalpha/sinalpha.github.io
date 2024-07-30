import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("Food");
	}
	
	preload(){}
	
	create(){
		this.setSubScene(0xffff00);
		this.addCloseBtn();
		this.input.on("POINTER_WHEEL", this.scrollCamera);
	}
	
	scrollCamera(event){
		console.log(event.deltaY);
	}
}