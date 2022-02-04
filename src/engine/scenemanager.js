class SceneManager {

    constructor(game, canvasWidth) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = canvasWidth;
        this.crash = new Crash(this.game);


        this.addAllEntities();
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    addAllEntities() {
        this.game.addEntity(this.crash);
        let start = -1000;
        for (let i = 0; i < 200; i++) {
            this.game.addEntity(new Platform(this.game, start, 600, 0));
            start += 128;
        }
        this.game.addEntity(new Platform(this.game, 500, 200, 1));
        this.game.addEntity(new Platform(this.game, 500+128, 200, 1));
        this.game.addEntity(new Platform(this.game, 500+128*2, 200, 1));

        for (let i = 0; i < this.canvasWidth / 320; i++) {
            this.game.addEntity(new Background(this.game, 320*i, 0));		
        }
    };

    update() {
        const PLAYER_WIDTH = 53;
        let midx = this.canvasWidth/2 - PLAYER_WIDTH/2;

        this.x = this.crash.x - midx;
    };

    draw(ctx) {
        
    };


}