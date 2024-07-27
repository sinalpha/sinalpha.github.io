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
		
		const blank = { widht : this.sceneSize.width, height : this.sceneSize.height / 10 };
		const barSize = { width : (this.sceneSize.height / 7) * 6 , height : this.sceneSize.height / 7.5 };
		const hungerBarPos = { x: this.closeBtnSize.width, y: this.closeBtnSize.width + blank.height };
		const tirednessBarPos = { x: this.closeBtnSize.width, y: hungerBarPos.y + blank.height};
		
		//add hunger bar.		
		//this.hungerText = this.add.text();
		this.hungerBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				hungerBarPos.x, hungerBarPos.y,
				barSize.width, barSize.height
			).
			setOrigin(0,0);
		
		//add tiredness bar.
		//this.tirednessText = this.add.text();
		this.tirednessBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				tirednessBarPos.x, tirednessBarPos.y,
				barSize.width, barSize.height
			).
			setOrigin(0,0);
	}

	
}