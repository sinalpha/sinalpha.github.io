export default class Status extends Phaser.Scene {
	constructor() {
		super({ key: 'status' });
	}
	
	preload(){
		 this.gameSceneSize = {
			widht: this.cameras.main.width,
			height: this.cameras.main.height
		};
		
		this.menuOrigin = {
            x:0,
            y:this.gameSceneSize.height
        };
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
          	0, 
          	this.gameSceneSize.height, 
        	this.gameSceneSize.width, 
			this.gameSceneSize.height
       );

    }
}