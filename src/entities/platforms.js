class Platform {
    constructor(game) {
        this.game = game;

        this.position = {
            x: 600,
            y: 200
        }

        this.width = 200;
        this.height = 20;
    }

    update() {

    };

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}