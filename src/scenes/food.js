import SubScene from './subScene.js'

export default class Food extends SubScene {
    constructor(){
        super("food");

		this.isDetecting = false;
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

			this.cameras.main.pan(
				this.cameras.main.centerX, 
				deltaY,
				100
			);

			setTimeout(()=>{ this.isDetecting = true; }, 100);

			console.log(deltaY);
		}
	}
}