export default class Status extends Phaser.Scene {
	constructor() {
		super({ key: 'status' });
		//this.parent = parent;
	}
	
	preload(){
		this.scene.bringToTop();
	}
	
	create(){
		this.setStatusBackground();
		this.setStatusCamera();
	}
	
	setStatusBackground(){
		 this.cameras.main.setBackgroundColor(0xffff00);
	}
	
	setStatusCamera(){
        //this.cameras.main.setViewport(
           // this.parent.x, 
           // this.parent.height, 
            //this.parent.width, 
            //this.parent.height
       // );
    }
}