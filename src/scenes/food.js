import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");
	}
	
	preload(){
		this.pointer = this.scene.input.activePointer;
	}
	
	create(){
		


		this.setSubScene(0xffff00);
		this.addCloseBtn();
		
	}
	
	update(){
		if(this.pointer.isDown)
			console.log(this.game.input.y);	
	}

	scrollCamera(event){		
	
	}
}