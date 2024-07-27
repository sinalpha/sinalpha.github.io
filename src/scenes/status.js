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
		
		const closeBtnSize = {
			width: this.sceneSize.height / 7,
			height: this.sceneSize.height / 7
		}
		this.closeBtn = this.add.nineslice( this.sceneSize.width,  0,'testButton').
		setOrigin(1,0).
		setSize(closeBtnSize.width,closeBtnSize.height);
	}
}