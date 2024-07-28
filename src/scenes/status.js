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
		
		const cellSize = {
			width : this.sceneSize.width / 15,
			height : this.sceneSize.height / 20
		};
		const blank = { 
			widht : this.sceneSize.width,
			height :  cellSize.height};
		const barSize = { 
			width : cellSize.width * 10,
			height : cellSize.height * 2};
		const hungerBarPos = { 
			x : cellSize.width * 3,
			y : cellSize.height * 3};
		const tirednessBarPos = { 
			x : hungerBarPos.x,
			y : hungerBarPos.y + barSize.height + blank.height };
		//const barLinePos = {x1: , y1: , x2: ,y2};
		
		//add hunger bar.		
		this.hungerText = this.add.text(
			20,
			hungerBarPos.y,
			'hunger',
			{color : 0x0000ff, fontSize: 40}
		);
		this.hungerBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				hungerBarPos.x, hungerBarPos.y,
				barSize.width, barSize.height
			);
		//add lines.
		const graphics = this.add.graphics({lineStyle: {width: 5, color:0x000000}});
		for(let i = 1; i < 10; i++){
			 graphics.lineBetween(
				cellSize.width * (3 + i),
				hungerBarPos.y,
				cellSize.width * (3 + i),
				hungerBarPos.y + barSize.height
			 );
		}
		
		//add tiredness bar.
		this.hungerText = this.add.text(
			20,
			tirednessBarPos.y,
			'tiredness',
			{color : 0x0000ff, fontSize: 40}
		);
		this.tirednessBar = this.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				tirednessBarPos.x, tirednessBarPos.y,
				barSize.width, barSize.height
			);
	}

	
}