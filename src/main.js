const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./assets/images/crash_spritesheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	canvas.width = innerWidth;
	canvas.height = innerHeight;

	gameEngine.addEntity(new Crash(gameEngine));
	gameEngine.addEntity(new Platform(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
