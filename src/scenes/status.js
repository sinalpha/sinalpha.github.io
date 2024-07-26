export default class Status extends Phaser.Scene {
	constructor() {
		super({ key: 'status' });
	}
	
	preload(){
		
	}
	
	create(){
		this.setStatusBackground();
		this.setStatusCamera();
	}
	
	setStatusBackground(){
		 this.cameras.main.setBackgroundColor(0xffff00);
	}
	
	setStatusCamera(){
		this.scene.bringToTop();
        this.cameras.main.setViewport(
           this.parent.x, 
           this.parent.height, 
            this.parent.width, 
            this.parent.height
       );
    }
}