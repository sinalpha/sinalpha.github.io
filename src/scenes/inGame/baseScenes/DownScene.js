export default class DownScene extends Phaser.Scene {
	
	setCameraViewPort(size){

		this.size = {width : size.width, height : size.height};
		
		this.origin = {
			x: 0,
			y: this.cameras.main.height - this.size.height
		}

		this.cameras.main.setViewport(
			this.origin.x,
			Phaser.Math.FloorTo(this.origin.y), 
			Phaser.Math.CeilTo(this.size.width),
			Phaser.Math.CeilTo(this.size.height));

		this.cameras.main.setBackgroundColor(0x0000ff);

		this.center = { x:this.size.width / 2, y:this.size.height / 2 }
		
	}

}
