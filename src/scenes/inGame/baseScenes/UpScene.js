export default class UpScene extends Phaser.Scene{

	setCameraViewPort(size){

		this.size = {width : size.width, height : size.height};

		this.cameras.main.setViewport(
			0,
			0, 
			Phaser.Math.CeilTo(this.size.width),
			Phaser.Math.CeilTo(this.size.height));

		this.cameras.main.setBackgroundColor(0x00ff00);
	
	}
}