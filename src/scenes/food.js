import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");

		this.isDetecting = false;
		this.pre
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

		if(this.isDetecting){
			


			const deltaY = this.pointer.y - this.pointer.downY;
			let movedCameraY = this.cameras.main.centerY + deltaY;


			this.cameras.main.pan(
				this.cameras.main.centerX, 
				movedCameraY,
				50
			);

			this.isDetecting = false;
		}
	}
}