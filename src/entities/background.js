class Background {
    constructor(game, x, y) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/images/BG/bg.png");

        this.animator = new Animator(this.spritesheet, 0, 0, 80, 176, 1, 0.1, 0, false, true);

        // this.width = this.w*4;
        // this.height = this.h*4;

        this.position = {
            x: x,
            y: y
        }

        this.updateBB();
    }

    updateBB() {
    }

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.position.x, this.position.y, 4);
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}