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
        let start = -1200;

        this.addnewWall(-411, 472, 4, 2, 127);
        this.addnewWall(-539, 472, 4, 1, 127);
        this.addnewWall(-667, 472, 4, 1, 127);
        this.addnewWall(-795, 472, 4, 1, 127);
        this.addnewWall(-923, 472, 4, 1, 127);
        this.addnewWall(-1051, 472, 4, 1, 127);
        //this.game.addEntity(new Wall(this.game, -410, 39, 3));

        for (let i = 0; i < 200; i++) {
            if (i % 33 != 0 && i % 34 != 0) {
                this.game.addEntity(new Platform(this.game, start, 600, 0));
            }
            start += 128;
        }
        this.addNewPlatform(500, 200, 3);
        this.addNewPlatform(900, 400, 4);
        this.addNewPlatform(1750, 100, 4);
        this.addNewPlatform(3600, 300, 4);
        this.addNewPlatform(4000, 300, 4);

        this.addnewWall(5000, 472, 2, 1, 127)

        for (let i = 0; i < this.canvasWidth / 320; i++) {
            this.game.addEntity(new Background(this.game, 320*i, 0));		
        }
    };

    addNewPlatform(x, y, length) {
        for (let i = 0; i < length; i++) {
            this.game.addEntity(new Platform(this.game, x + 128*i, y, 1));
        }
    }

    addnewWall(x, y, height, type, wall_height) {
        let i;
        for (i = 0; i < height; i++) {
            this.game.addEntity(new Wall(this.game, x, y-wall_height*i, type));
        }
        this.game.addEntity(new Wall(this.game, x, y-wall_height*(i - 1) - 52, type + 2));
    }

    update() {
        const PLAYER_WIDTH = 53;
        let midx = this.canvasWidth/2 - PLAYER_WIDTH/2;
        this.x = this.crash.position.x - midx;
    };

    draw(ctx) {
    };




}