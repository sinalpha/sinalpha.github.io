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
		// this.input.on("pointermove", (pointer)=>{
			
		// });
	}
	
	scrollCamera(event){

		console.log(game.input.y);	
		
	
	}
}