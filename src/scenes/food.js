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

		this.detectScroll()
	}

	detectScroll(){		
		if(this.pointer.isDown){
			const { downY, curY} = this.pointer.getDistanceY();
			const deltaY = curY - downY;


		}
	}
}