export default class DownScene extends Phaser.Scene {
	constructor(key, downSceneScreenSize){
		super({ key : key });
	
		this.downSceneScreenSize = downSceneScreenSize;
	}
	
	setCameraViewPort(){
		this.cameras.main.setViewport(
			this.scale.gameSize.height - this.downSceneScreenSize,
			0, 
			this.downSceneScreenSize.width,
			this.downSceneScreenSize.height);

		this.cameras.main.setBackgroundColor(0x111111);
	}

}
