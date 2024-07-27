export default class SubScene extends Phaser.Scene 
{
	constructor(key){
		super({ key : key });
	}
	
	setSubScene(backgroundColor){
		this.gamethisSize = {
			width: this.cameras.main.width,
			height: this.cameras.main.height / 2
		};

		this.cameras.main.setBackgroundColor( backgroundColor);

		this.scene.bringToTop();

		this.cameras.main.setViewport(
			0, //the coner of top left
			this.gamethisSize.height,
			this.gamethisSize.width,
			this.gamethisSize.height, 
		);
	}
}
