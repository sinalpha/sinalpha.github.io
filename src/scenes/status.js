import { setSubScene } from './util.js'

export default class Status extends Phaser.Scene {
	constructor() {
		super({ key: 'status' });
	}
	
	preload(){
		// this.gameSceneSize = {
		// 	width: this.cameras.main.width,
		// 	height: this.cameras.main.height / 2
		// };
		
		this.menuOrigin = {
            x:0,
            y:this.gameSceneSize.height
        };
	}
	
	create(){
		// this.setStatusBackground();
		// this.setStatusCamera();
		this.addCloseBtn();
	}
	
	// setStatusBackground(){
	// 	 this.cameras.main.setBackgroundColor(0xffff00);
	// }
	
	// setStatusCamera(){
	// 	this.scene.bringToTop();
	// 	this.cameras.main.setViewport(
	// 		0, //the coner of top left
	// 		this.gameSceneSize.height,
	// 		this.gameSceneSize.width,
	// 		this.gameSceneSize.height,
	// 	);
	// }
	
	addCloseBtn(){
		//this.closeBtn = this.add.nineslice()
	}
}