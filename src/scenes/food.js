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
			const deltaY = this.pointer.y - this.pointer.downY;

			console.log("deltaY ==");
			console.log(deltaY);
			console.log("centerY ==");
			console.log(this.cameras.main.centerY);
			console.log("centerY + centerY ==");
			console.log(this.cameras.main.centerY + deltaY);

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				deltaY,
				1000
			);
			
		}
	}
}