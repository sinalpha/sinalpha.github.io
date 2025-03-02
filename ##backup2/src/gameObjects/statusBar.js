export default class StatusBar {
	constructor(scene){
		
		this.scene = scene;
		
		this.cellSize = {
			width : this.scene.sceneSize.width / 15,
			height : this.scene.sceneSize.height / 20};
		this.blank = { 
			widht : this.scene.sceneSize.width,
			height :  this.cellSize.height};
		this.barSize = { 
			width : this.cellSize.width * 10,
			height : this.cellSize.height * 2};
	
	
	}
	
	createBar(text, fontSize, pos){
		this.text = text;
		this.fontSize = fontSize;
		this.pos = pos;
		
		this.createText();

	}
	
	createText(){
		this.text = this.scene.add.text(
			20,
			this.pos.y,
			this.text,
			{color : 0x0000ff, fontSize: this.fontSize}
		);
	}
	
	createBaseBar(){
		this.bar = this.scene.add.graphics().
			fillStyle(0xd40000, 1).
			fillRect(
				this.pos.x, this.pos.y,
				this.barSize.width, this.barSize.height
			);
	}
	
	createLines(){
		this.lines = this.scene.add.graphics({lineStyle: {width: 2, color:0x000000}});
		
		for(let i = 1; i < 10; i++){
			this.lines.lineBetween(
				this.cellSize.width * (3 + i),
				this.pos.y,
				this.cellSize.width * (3 + i),
				this.pos.y + this.barSize.height
			);
		}
	}
	
	updateGuageBar(num){
		
		this.createBaseBar();
		this.createLines();
		
		this.gaugeBar = this.scene.add.graphics().
		
		fillStyle(0x00d400, 1).
		fillRect(
			this.pos.x, this.pos.y,
			this.cellSize.width * num, this.barSize.height
		);
	}
	

	
}