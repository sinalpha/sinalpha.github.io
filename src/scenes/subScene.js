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
			0, //the coner of top leftt
			this.sceneSize.height,
			this.sceneSize.width,
			this.sceneSize.height, 
		);
		
		this.menuOrigin = {
            x:0,
            y:this.sceneSize.height
        };

		//property for scroll menu
		this.preDeltaY = this.sceneSize.height / 2;
	}
	
	addCloseBtn(){
		
		const closeBtnSize = {
			width: this.sceneSize.height / 7,
			height: this.sceneSize.height / 7
		}
		this.closeBtn = this.add.nineslice( this.sceneSize.width,  0,'testButton').
		setOrigin(1,0).
		setSize(closeBtnSize.width,closeBtnSize.height).
		setInteractive().
		on('pointerdown', this.activeCloseBtn.bind(this));
	}
	
	activeCloseBtn(){
		this.scene.stop();
		this.scene.run('menu');
	}
}
