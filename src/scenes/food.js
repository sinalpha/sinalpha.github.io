import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");

		this.isDetecting = false;
		this.preDonwY = 0;
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
			this.preDownY = this.pointer.downY;
			console.log(deltaY);
			console.log(this.preDonwY);
		

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				deltaY - (this.sceneSize.height / 2), //camera origin is center
				50
			);

			this.isDetecting = false;
		}
	}
}