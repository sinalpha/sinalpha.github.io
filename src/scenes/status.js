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
		this.hungerBar.updateGuageBar(this.uniguri.hunger);
		this.treidnessBar.updateGuageBar(this.uniguri.tiredness);
	}
	
	addStatusBar(){
		

		this.hungerBar = new StatusBar(this);
		const hungerBarPos = { 
			x : this.hungerBar.cellSize.width * 3,
			y : this.hungerBar.cellSize.height * 3};
		this.hungerBar.createBar('허기', 40, hungerBarPos);
		
		
		this.tirednessBar = new StatusBar(this);
		const tirednessBarPos = { 
			x : hungerBarPos.x,
			y : hungerBarPos.y + this.tirednessBar.barSize.height + this.tirednessBar.blank.height };
		this.hungerBar.createBar('피로도', 30, tirednessBarPos);
		
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