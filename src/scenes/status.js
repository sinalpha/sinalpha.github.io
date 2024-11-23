import DownScene from './DownScene.js'
import StatusBar from '../gameObjects/statusBar.js'

export default class Status extends DownScene {
	constructor() {
		super('status');
		
	}
	
	preload(){
		
		this.gameScene = this.scene.manager.getScene('game');
		this.uniguri = this.gameScene.uniguri;
		this.setDownScene(0xffff00);
		this.addCloseBtn();
		this.addStatusBar();
	}
	
	create(){
		
	}
	
	update(){
		this.updateGuageBars(this.uniguri);
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
		this.tirednessBar.createBar('피로도', 30, tirednessBarPos);
		
	}
	
	updateGuageBars(uniguri){
		this.hungerBar.updateGuageBar(uniguri.hunger);
		this.tirednessBar.updateGuageBar(uniguri.tiredness);
	}
	
}