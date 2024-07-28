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
		
		const blank = { 
			widht : this.sceneSize.width,
			height : 10 };
		const barSize = { 
			width : (this.sceneSize.width / 13 ) * 10,
			height : this.sceneSize.height / 13 };
		const hungerBarPos = { 
			x : this.sceneSize.width / 1+2,
			y : (this.sceneSize.height / 13) + blank.height };
		const tirednessBarPos = { 
			x : this.sceneSize.width / 13,
			y : hungerBarPos.y + barSize.height + blank.height };
		//const barLinePos = {x1: , y1: , x2: ,y2};
		
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