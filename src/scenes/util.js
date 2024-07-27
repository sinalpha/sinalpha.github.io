export function setSubScene(scene, backgroundColor){
		
	scene.gameSceneSize = {
		width: scene.cameras.main.width,
		height: scene.cameras.main.height / 2
	};
		
	scene.cameras.main.setBackgroundColor( backgroundColor);

	scene.scene.bringToTop();

	scene.cameras.main.setViewport(
		0, //the coner of top left
		scene.gameSceneSize.height,
		scene.gameSceneSize.width,
		scene.gameSceneSize.height, 
	);
}
