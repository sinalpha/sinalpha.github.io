import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("Food");
	}
	
	preload(){}
	
	create(){
		this.input.on("POINTER_WHEEL",scrollCamera);
	}
	
	scrollCamera(event){
		console.log(event.deltaY);
	}
}