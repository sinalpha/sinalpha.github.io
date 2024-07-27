import SubScene from './subScene.js'

export default class Status extends SubScene {
	constructor() {
		super('status');
		
	}
	
	preload(){
		this.setSubScene(0xffff00);
		this.addCloseBtn();
	}
	
	create(){
		this.addStatusBar();
	}
	
	addStatusBar(){
		
		const blank = { widht : this.sceneSize.width, height : this.sceneSize.height / 8 };
		const barSize = { width : (this.sceneSize.height / 7) * 10 , height : this.sceneSize.height / 7.5 };
		const hungerBarPos = { x: this.sceneSize.height / 7, y: (this.sceneSize.height / 7) + blank.height };
		const tirednessBarPos = { x: this.sceneSize.height / 7, y: hungerBarPos.y + blank.height};
		
		//add hunger bar.		
		//this.hungerText = this.add.text();
		this.hungerBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				hungerBarPos.x, hungerBarPos.y,
				barSize.width, barSize.height
			);
		
		//add tiredness bar.
		//this.tirednessText = this.add.text();
		this.tirednessBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				tirednessBarPos.x, tirednessBarPos.y,
				barSize.width, barSize.height
			);
	}

	
}