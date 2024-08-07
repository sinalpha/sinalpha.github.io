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
		
		console.log(this.cameras.main.centerX);
		console.log(this.cameras.main.centerY);
	}
	
	update(){

		this.detectScroll()
	}

	detectScroll(){		
		if(this.pointer.isDown){
			const deltaY = this.pointer.getDistanceY();

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				this.cameras.main.centerY + deltaY,
				10000
			);

			console.log(this.cameras.main.centerX);
			console.log(this.cameras.main.centerY);
		}
	}
}