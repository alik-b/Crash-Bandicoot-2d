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
        this.animator.drawFrame(this.game.clockTick, ctx, this.position.x, this.position.y, 4);
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}