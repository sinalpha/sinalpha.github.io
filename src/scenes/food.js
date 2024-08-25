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

			console.log(deltaY);


			this.cameras.main.pan(
				this.cameras.main.x, 
				this.cameras.main.y + deltaY,
				10000
			);
			
		}
	}
}