export default class DownScene extends Phaser.Scene {
	
	setCameraViewPort(downSceneScreenSize){

		this.downSceneScreenSize = downSceneScreenSize;

		this.cameras.main.setViewport(
			this.scale.gameSize.height - this.downSceneScreenSize,
			0, 
			this.downSceneScreenSize.width,
			this.downSceneScreenSize.height);

		this.cameras.main.setBackgroundColor(0x111111);

	}

}
