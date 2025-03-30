export default class DownScene extends Phaser.Scene {
	
	setCameraViewPort(downSceneScreenSize){

		this.downSceneScreenSize = downSceneScreenSize;
		this.origin = {
			width: this.scale.gameSize.height - this.downSceneScreenSize,
			height: 0
		}

		this.cameras.main.setViewport(
			this.origin.width,
			this.origin.height, 
			this.downSceneScreenSize.width,
			this.downSceneScreenSize.height);

		this.cameras.main.setBackgroundColor(0x111111);
		
	}

}
