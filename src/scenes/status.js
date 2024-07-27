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
		
	}
	
	
}