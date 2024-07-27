import SubScene from './subScene.js'

export default class Status extends SubScene {
	constructor() {
		super('status');
	}
	
	preload(){
		this.setSubScene(0xffff00);
	}
	
	create(){
		this.addCloseBtn();
	}

	
	addCloseBtn(){
		//this.closeBtn = this.add.nineslice()
	}
}