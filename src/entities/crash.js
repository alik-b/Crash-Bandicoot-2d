class Crash {
    constructor(game) {
        this.game = game;

        this.animations = [];
        this.sprite = ASSET_MANAGER.getAsset("./res/img/player.png");

        this.facing = 0; // 0 = forward, 1 = right, 2 = backwards, 3 = left
        this.state = 1; // 0 = idle, 1 = walking

        this.x = 100;
        this.y = 100;
        this.velocity = 4;
        this.scale = 4;

        this.loadAnimations();
    };

    loadAnimations() {
        // Animator(this.sprite, x, y, width, height, framesCount, duration, padding, reverse, loop));

        for (let i = 0; i < 4; i++) { // four directions
            this.animations.push([]);
            for (let j = 0; j < 2; j++) { // two states
                this.animations[i].push([]);
            }
        }

        // forward
        this.animations[0][0] = new Animator(this.sprite, 14, 0, 14, 21, 1, 0.15, 0, false, true); // idle
        this.animations[0][1] = new Animator(this.sprite, 0, 0, 14, 21, 4, 0.15, 0, false, true); // walking

        // right
        this.animations[1][0] = new Animator(this.sprite, 14, 44, 14, 21, 1, 0.15, 0, false, true); // idle
        this.animations[1][1] = new Animator(this.sprite, 0, 44, 14, 21, 4, 0.15, 0, false, true); // walking

        // backwards
        this.animations[2][0] = new Animator(this.sprite, 14, 22, 14, 21, 1, 0.15, 0, false, true); // idle
        this.animations[2][1] = new Animator(this.sprite, 0, 22, 14, 21, 4, 0.15, 0, false, true); // walking

        // left
        this.animations[3][0] = new Animator(this.sprite, 14, 66, 14, 21, 1, 0.15, 0, false, true); // idle
        this.animations[3][1] = new Animator(this.sprite, 0, 66, 14, 21, 4, 0.15, 0, false, true); // walking
    };

    update() {

        const WALK_SPEED = 100;

        if (this.game.keys["ArrowDown"] || this.game.keys["s"]) {
            this.y += this.velocity;
            this.facing = 0;
            this.state = 1;
        } else if (this.game.keys["ArrowRight"] || this.game.keys["d"]) {
            this.x += this.velocity;
            this.facing = 1;
            this.state = 1;
        } else if (this.game.keys["ArrowUp"] || this.game.keys["w"]) {
            this.y -= this.velocity;
            this.facing = 2;
            this.state = 1;
        } else if (this.game.keys["ArrowLeft"] || this.game.keys["a"]) {
            this.x -= this.velocity;
            this.facing = 3;
            this.state = 1;
        } else {
            this.state = 0;
        }
        
    };
    
    draw (ctx) {
        this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    };
}