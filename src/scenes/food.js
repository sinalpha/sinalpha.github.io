import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");
	}
	
	preload(){
		this.pointer = this.input.activePointer;
	}
	
	create(){
		
		this.setSubScene(0xffff00);
		this.addCloseBtn();
		
	}
	
	update(){

		this.detectScroll();

	}

	detectScroll(){		
		if(this.pointer.isDown){
			this.isDetecting = true;
		}

		if(!this.pointer.isDown && this.isDetecting){
			
			this.isDetecting = false;
			const deltaY = this.pointer.y - this.pointer.downY;

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				this.cameras.main.centerY,
				500
			);
		}
	}
}