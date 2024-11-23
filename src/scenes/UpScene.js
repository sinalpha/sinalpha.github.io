export default class UpScene extends Phaser.Scene{
    constructor(key, upSceneScreenSize){
		super({ key : key });
	}

	setCameraViewPort(){
		camera.setViewport(
			0,
			0, 
			this.upSceneScreenSize.width,
			this.upSceneScreenSize.height);

		camera.setBackgroundColor(0x222222);
	}
}