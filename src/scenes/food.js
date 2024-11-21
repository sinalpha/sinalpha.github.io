import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");
	}
	
	preload(){
		this.pointer = this.input.activePointer;
		this.isDetecting = false;
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
			let movedY; //변수명 다시 지어야 됨.

			if (deltaY == 0){
				movedY = this.preDeltaY;
			}
			else{
				movedY = deltaY;
				this.preDeltaY = deltaY;
			}

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				movedY,
				50
			);

			this.isDetecting = false;
		}
	}
}