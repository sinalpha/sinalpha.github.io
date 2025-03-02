export default class UpScene extends Phaser.Scene{

	setCameraViewPort(upSceneScreenSize){

		this.upSceneScreenSize = upSceneScreenSize;

		this.cameras.main.setViewport(
			0,
			0, 
			this.upSceneScreenSize.width,
			this.upSceneScreenSize.height);

		this.cameras.main.setBackgroundColor(0x222222);
	
	}
}