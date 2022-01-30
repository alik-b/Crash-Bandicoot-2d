const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./assets/images/crash_spritesheet.png");
ASSET_MANAGER.queueDownload("./assets/images/Tiles/tiles.png");
ASSET_MANAGER.queueDownload("./assets/images/BG/bg.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	canvas.width = innerWidth;
	canvas.height = 780;
	console.log("width: " + canvas.width);

	gameEngine.addEntity(new Crash(gameEngine));
	start = -1000;
	for (i = 0; i < 200; i++) {
		gameEngine.addEntity(new Platform(gameEngine, start, 600, 0));
		start += 128;
	}
	gameEngine.addEntity(new Platform(gameEngine, 500, 200, 1));
	gameEngine.addEntity(new Platform(gameEngine, 500+128, 200, 1));
	gameEngine.addEntity(new Platform(gameEngine, 500+128*2, 200, 1));

	i = 0;
	for (i = 0; i < canvas.width / 320; i++) {
		gameEngine.addEntity(new Background(gameEngine, 320*i, 0));		
	}
	gameEngine.init(ctx);

	gameEngine.start();
});
