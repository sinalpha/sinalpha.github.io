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
			height : this.sceneSize.height / 20 };
		const barSize = { 
			width : (this.sceneSize.width / 15 ) * 10,
			height : (this.sceneSize.height / 20) * 2};
		const hungerBarPos = { 
			x : (this.sceneSize.width / 15) * 3,
			y : ((this.sceneSize.height / 20) * 3)};
		const tirednessBarPos = { 
			x : hungerBarPos.x,
			y : hungerBarPos.y + barSize.height + blank.height };
		//const barLinePos = {x1: , y1: , x2: ,y2};
		
		//add hunger bar.		
		this.hungerText = this.add.text(
			(this.sceneSize.width / 15),
			hungerBarPos.y,
			'hunger',
			{ font : 'Georgia'}
		);
		// this.hungerBar = this.add.graphics().
		// 	fillStyle(0xd40000, 1).
		// 	fillRect(
		// 		hungerBarPos.x, hungerBarPos.y,
		// 		barSize.width, barSize.height
		// 	);
		//add lines
		this.barLines = [];
		for(let i = 1; i < 10; i++){
			this.barLines.push(
				this.add.line(
					(this.sceneSize.width / 15) * (3 + i),
					hungerBarPos.y,
					(this.sceneSize.width / 15) * (3 + i),
					hungerBarPos.y,
					(this.sceneSize.width / 15) * (3 + i),
					hungerBarPos.y + blank.height,
					0xffffff
		))}
		
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