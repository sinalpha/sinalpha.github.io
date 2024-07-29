import SubScene from './subScene.js'
import StatusBar from '../gameObjects/statusBar.js'

export default class Status extends SubScene {
	constructor() {
		super('status');
		
	}
	
	preload(){
		this.gameScene = this.scene.manager.getScene('game');
		this.uniguri = this.gameScene.uniguri;
		this.setSubScene(0xffff00);
		this.addCloseBtn();
		this.addStatusBar();
	}
	
	create(){
		
	}
	
	update(){
		this.hungerBar.updateGuageBar(this.uniguri);
	}
	
	addStatusBar(){
		//
		// const cellSize = {
		// 	width : this.sceneSize.width / 15,
		// 	height : this.sceneSize.height / 20
		// };
		// const blank = { 
		// 	widht : this.sceneSize.width,
		// 	height :  cellSize.height};
		// const barSize = { 
		// 	width : cellSize.width * 10,
		// 	height : cellSize.height * 2};
		this.hungerBar = new StatusBar(this);
		//const tirednessBar = new StatusBar(this.scene);
		const hungerBarPos = { 
			x : this.hungerBar.cellSize.width * 3,
			y : this.hungerBar.cellSize.height * 3};
		this.hungerBar.createBar('허기', 40, hungerBarPos);
		
		// const tirednessBarPos = { 
		// 	x : hungerBarPos.x,
		// 	y : hungerBarPos.y + tirednessBar.barSize.height + tirednessBar.blank.height };
		
		
		//add hunger bar.		
		// this.hungerText = this.add.text(
		// 	20,
		// 	hungerBarPos.y,
		// 	'허기',
		// 	{color : 0x0000ff, fontSize: 40}
		// );
		// this.hungerBar = this.add.graphics().
		// 	fillStyle(0xd40000, 1).
		// 	fillRect(
		// 		hungerBarPos.x, hungerBarPos.y,
		// 		barSize.width, barSize.height
		// 	);
		// const hungerLines = this.add.graphics({lineStyle: {width: 2, color:0x000000}});
		// for(let i = 1; i < 10; i++){
		// 	 hungerLines.lineBetween(
		// 		cellSize.width * (3 + i),
		// 		hungerBarPos.y,
		// 		cellSize.width * (3 + i),
		// 		hungerBarPos.y + barSize.height
		// 	 );
		// }
		
		//add tiredness bar.
		// this.hungerText = this.add.text(
		// 	20,
		// 	tirednessBarPos.y,
		// 	'피로도',
		// 	{color : 0x0000ff, fontSize: 30}
		// );
		// this.tirednessBar = this.add.graphics().
		// 	fillStyle(0xd40000, 1).
		// 	fillRect(
		// 		tirednessBarPos.x, tirednessBarPos.y,
		// 		barSize.width, barSize.height
		// 	);
		// const tirednessLines = this.add.graphics({lineStyle: {width: 2, color:0x000000}});
		// for(let i = 1; i < 10; i++){
		// 	 tirednessLines.lineBetween(
		// 		cellSize.width * (3 + i),
		// 		tirednessBarPos.y,
		// 		cellSize.width * (3 + i),
		// 		tirednessBarPos.y + barSize.height
		// 	 );
		// }
	}
	
	updateGuageBar(uniguri){
		// const cellSize = {
		// 	width : this.sceneSize.width / 15,
		// 	height : this.sceneSize.height / 20
		// };
		// const blank = { 
		// 	widht : this.sceneSize.width,
		// 	height :  cellSize.height};
		// const barSize = { 
		// 	width : cellSize.width * 10,
		// 	height : cellSize.height * 2};
		// const hungerBarPos = { 
		// 	x : cellSize.width * 3,
		// 	y : cellSize.height * 3};
		// const tirednessBarPos = { 
		// 	x : hungerBarPos.x,
		// 	y : hungerBarPos.y + barSize.height + blank.height };
		
		
		// this.hungerGaugeBar = this.add.graphics().
		// 	fillStyle(0x00d400, 1).
		// 	fillRect(
		// 		hungerBarPos.x, hungerBarPos.y,
		// 		cellSize.width * this.hunger, barSize.height
		// 	);
		
		// this.tirednessGaugeBar = this.add.graphics().
		// 	fillStyle(0x00d400, 1).
		// 	fillRect(
		// 		tirednessBarPos.x, tirednessBarPos.y,
		// 		cellSize.width * this.tiredness, barSize.height
		// 	);
	}
	
}