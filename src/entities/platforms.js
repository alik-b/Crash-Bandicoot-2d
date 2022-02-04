class Platform {
    constructor(game, x, y, thickness) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/images/Tiles/tiles.png");

        this.w = 32;
        if (thickness == 0) {
            this.h = 47;
        } else {
            this.h = 18;
        }

        this.animator = new Animator(this.spritesheet, 3, 0, this.w, this.h, 1, 0.1, 0, false, true);
        // 0 = thick, 1 = thin
        this.thickness = thickness;

        this.width = this.w*4;
        this.height = this.h*4;

        this.position = {
            x: x,
            y: y
        }

        this.updateBB();
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x, this.position.y - this.game.camera.y, 4);
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}

class Wall {
    // type: 0 = left wall, 1 = middle wall, 2 = right wall, 3 = top of wall
    constructor(game, x, y, type) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/images/Tiles/tiles.png");
        this.scale = 4;
        this.width;
        this.height;

        if (type == 0) {
            this.xStart = 1;
            this.yStart = 6;
            this.width = 45;
            this.height = 41;
        } else if (type == 1) {
            this.xStart = 2;
            this.yStart = 13;
            this.width = 32;
            this.height = 32;
        } else if (type == 2) {
            this.xStart = 2;
            this.yStart = 13;
            this.width = 45;
            this.height = 32;
        } else if (type == 3) {
            this.xStart = 2;
            this.yStart = 0;
            this.width = 32;
            this.height = 13;
        } else if (type == 4) {
            this.xStart = 2;
            this.yStart = 0;
            this.width = 46;
            this.height = 13;
        }

        this.animator = new Animator(this.spritesheet, this.xStart, this.yStart, this.width, this.height, 1, 0.1, 0, false, true);

        this.position = {
            x: x,
            y: y
        }

        this.updateBB();
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.position.x, this.position.y, this.width*this.scale, this.height*this.scale);
    }

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x, this.position.y - this.game.camera.y, 4);
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };

}