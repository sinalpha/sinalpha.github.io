export default class SubScene extends Phaser.Scene 
{
	constructor(key){
		super({ key : key });
	}
	
	setSubScene(backgroundColor){
		this.sceneSize = {
			width: this.cameras.main.width,
			height: this.cameras.main.height / 2
		};

		this.cameras.main.setBackgroundColor( backgroundColor );

		this.scene.bringToTop();

		this.cameras.main.setViewport(
			0, //the coner of top left
			this.sceneSize.height,
			this.sceneSize.width,
			this.sceneSize.height, 
		);
		
		this.menuOrigin = {
            x:0,
            y:this.sceneSize.height
        };
	}
}
