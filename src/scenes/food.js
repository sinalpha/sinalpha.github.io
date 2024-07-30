import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");
	}
	
	preload(){}
	
	create(){
		this.setSubScene(0xffff00);
		this.addCloseBtn();
		this.input.on("pointerdown", this.scrollCamera.bind(this));
	}
	
	scrollCamera(event){

		console.log("do");	
		
		this.input.on("pointermove", (pointer)=>{
			console.log(pointer.deltaY);
		});
	}
}