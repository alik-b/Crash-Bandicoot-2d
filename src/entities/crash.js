class Crash {
    constructor(game) {
        this.game = game;

        this.animations = [];
        this.sprite = ASSET_MANAGER.getAsset("./assets/images/crash_spritesheet.png");

        this.facing = 0; // 0 = left, 1 = right
        this.state = 0; // 0 = idle, 1 = running, 2 = jumping

        this.x = 100;
        this.y = 100;
        this.velocity = 4;
        this.scale = 4;

        this.loadAnimations();
    };

    loadAnimations() {
        // Animator(this.sprite, x, y, width, height, framesCount, duration, padding, reverse, loop));

        for (let i = 0; i < 2; i++) { // two directions
            this.animations.push([]);
            for (let j = 0; j < 3; j++) { // three states
                this.animations[i].push([]);
            }
        }

        // idle left -> 4 frames
        // starts at (264, 114)
        // w: 48, h: 65
        // left
        this.animations[0][0] = new Animator(this.sprite, 264, 114, 51, 65, 1, 0.15, 0, false, true); // idle
        // this.animations[3][1] = new Animator(this.sprite, 0, 66, 14, 21, 4, 0.15, 0, false, true); // running

        // // right
        // this.animations[1][0] = new Animator(this.sprite, 14, 44, 14, 21, 1, 0.15, 0, false, true); // idle
        // this.animations[1][1] = new Animator(this.sprite, 0, 44, 14, 21, 4, 0.15, 0, false, true); // running
    };

    update() {

        // const WALK_SPEED = 100;

        // if (this.game.keys["ArrowDown"] || this.game.keys["s"]) {
        //     this.y += this.velocity;
        //     this.facing = 0;
        //     this.state = 1;
        // } else if (this.game.keys["ArrowRight"] || this.game.keys["d"]) {
        //     this.x += this.velocity;
        //     this.facing = 1;
        //     this.state = 1;
        // } else if (this.game.keys["ArrowUp"] || this.game.keys["w"]) {
        //     this.y -= this.velocity;
        //     this.facing = 2;
        //     this.state = 1;
        // } else if (this.game.keys["ArrowLeft"] || this.game.keys["a"]) {
        //     this.x -= this.velocity;
        //     this.facing = 3;
        //     this.state = 1;
        // } else {
        //     this.state = 0;
        // }
        
    };
    
    draw (ctx) {
        this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    };
}