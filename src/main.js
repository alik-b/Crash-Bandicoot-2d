const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./assets/images/crash_spritesheet.png");
ASSET_MANAGER.queueDownload("./assets/images/Tiles/tiles.png");
ASSET_MANAGER.queueDownload("./assets/images/BG/bg.png");

ASSET_MANAGER.downloadAll(() => {
	var canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	canvas.width = innerWidth;
	canvas.height = 780;

	gameEngine.addEntity(new SceneManager(gameEngine, canvas.width));
	gameEngine.init(ctx);

	gameEngine.start();
});
