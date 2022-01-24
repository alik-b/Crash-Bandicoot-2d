class Platform {
    constructor(game) {
        this.game = game;

        this.position = {
            x: 600,
            y: 200
        }

        this.width = 200;
        this.height = 20;

        this.updateBB();
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    };

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}