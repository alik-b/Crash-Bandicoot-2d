class Crash {
    constructor(game) {
        this.game = game;

        this.animations = [];
        this.sprite = ASSET_MANAGER.getAsset("./assets/images/crash_spritesheet.png");

        // 0 = left, 1 = right
        this.facing = 1;

        // 0 = idle, 1 = running, 2 = spinning, 3 = jumping,
        // 4 = falling, 5 = Angel Death, 6 = TNT/NitroDeath
        this.state = 0;

        this.position = {
            x: 100,
            y: 100
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.width = 53;
        this.height = 103;
        this.gravity = 1.5;
        this.scale = 1.5;

        this.angel_death_arr =
        [   [18, 1257, 103, 95, this.x + 351, this.y + 47],
            [132, 1269, 121, 82, this.x + 360, this.y + 41],
            [267, 1274, 94, 77, this.x + 347, this.y + 38],
            [374, 1274, 89, 77, this.x + 344, this.y + 38],
            [478, 1272, 75, 78, this.x + 337, this.y + 39],
            [567, 1272, 81, 77, this.x + 340, this.y + 38],
            [660, 1276, 133, 80, this.x + 366, this.y + 40],
            [814, 1263, 105, 96, this.x + 352, this.y + 48] ];

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

        // LEFT
        this.animations[0][0] = new Animator(this.sprite, 264, 114, 53, 65, 4, 0.2, 0, false, true); // idle
        this.animations[0][1] = new Animator(this.sprite, 45, 283, 58, 64, 14, 0.12, 0, false, true); // running
        this.animations[0][2] = new Animator(this.sprite, 53, 375, 59, 64, 4, 0.12, 0, true, true); // spinning
        this.animations[0][3] = new Animator(this.sprite, 749, 547, 50, 67, 2, 0.2, 0, false, true); // jumping
        this.animations[0][4] = new Animator(this.sprite, 131, 465, 53, 54, 1, 0.2, 0, false, true); // falling

        // RIGHT
        this.animations[1][0] = new Animator(this.sprite, 490, 114, 50, 65, 4, 0.2, 0, false, true); // idle
        this.animations[1][1] = new Animator(this.sprite, 45, 196, 58, 64, 14, 0.12, 0, true, true); // running
        this.animations[1][2] = new Animator(this.sprite, 53, 375, 59, 64, 4, 0.12, 0, false, true); // spinning
        this.animations[1][3] = new Animator(this.sprite, 603, 547, 50, 67, 2, 0.2, 0, false, true); // jumping
        this.animations[1][4] = new Animator(this.sprite, 52, 465, 53, 54, 1, 0.2, 0, false, true); // falling

        // DEATHS
        this.animations[0][5] = new Animator(this.sprite, 0, 0, 0, 0, 8, 0.15, 0, false, true); // angel death
        this.animations[1][5] = new Animator(this.sprite, 0, 0, 0, 0, 8, 0.15, 0, false, true); // angel death
        this.animations[1][6] = new Animator(this.sprite, 425, 1391, 62, 64, 4, 0.5, 0, false, true); // TNT/NITRO death


    };

    update() {

        
        let right = this.game.keys["ArrowRight"] || this.game.keys["d"];
        let left = this.game.keys["ArrowLeft"] || this.game.keys["a"];
        let jump = this.game.keys["ArrowUp"] || this.game.keys["w"];
        let crouch = this.game.keys["ArrowDown"] || this.game.keys["s"];

        if (jump) {
            this.state = 3;
            this.velocity.y -= 3;
        }

        if (right) {
            this.velocity.x = 5;
            this.facing = 1;
            this.state = 1;
        } else if (left) {
            this.velocity.x = -5;
            this.facing = 0;
            this.state = 1;
        } else {
            this.state = 0;
            this.velocity.x = 0;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= 500) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }

    };

    draw (ctx) {
        this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.position.x, this.position.y, this.scale);
        // // idle left
        // this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
        // // running left
        //this.animations[this.facing][this.state + 1].drawFrame(this.game.clockTick, ctx, 100, 100, this.scale);
        // // spinning left
        // this.animations[this.facing][this.state + 2].drawFrame(this.game.clockTick, ctx, this.x, this.y + 200, this.scale);
        // // jumping left
        // this.animations[this.facing][this.state + 3].drawFrame(this.game.clockTick, ctx, this.x, this.y + 300, this.scale);
        // // falling left
        // this.animations[this.facing][this.state + 4].drawFrame(this.game.clockTick, ctx, this.x, this.y + 400, this.scale);

        // // idle right
        // this.animations[this.facing + 1][this.state].drawFrame(this.game.clockTick, ctx, this.x + 100, this.y, this.scale);
        // // running right
        //this.animations[this.facing + 1][this.state + 1].drawFrame(this.game.clockTick, ctx, 200, 100, this.scale);
        // // spinning right
        // this.animations[this.facing + 1][this.state + 2].drawFrame(this.game.clockTick, ctx, this.x + 100, this.y + 200, this.scale);
        // // jumping right
        // this.animations[this.facing + 1][this.state + 3].drawFrame(this.game.clockTick, ctx, this.x + 100, this.y + 300, this.scale);
        // // falling right
        // this.animations[this.facing + 1][this.state + 4].drawFrame(this.game.clockTick, ctx, this.x + 100, this.y + 400, this.scale);

        // // angel death
        // this.animations[this.facing][this.state + 5].drawFrameFromArr(this.game.clockTick, ctx, this.angel_death_arr, this.scale);

        // // TNT/NITRO death
        // this.animations[this.facing + 1][this.state + 6].drawFrame(this.game.clockTick, ctx, this.x + 100, this.y + 500, this.scale);

        // TEST
        //this.animations[0][0].drawFrame(this.game.clockTick, ctx, 200, 300, this.scale);
    };
}