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
        this.BB = new BoundingBox(this.position.x, this.position.y, this.width*this.scale, this.height*this.scale);
        this.lastBB = this.BB;
    }

    update() {

        // collisions
        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity instanceof Crash && that.BB.collide(entity.BB)) {
                if(that.BB.right <= entity.lastBB.left ){
                    entity.position.x = that.BB.right;
                }
                if(that.BB.left >= entity.lastBB.right ){
                    entity.position.x = that.BB.left - entity.width;
                }
                if(that.BB.bottom <= entity.lastBB.top){
                    entity.position.y = that.BB.bottom;
                }
                if(that.BB.top >= entity.lastBB.bottom){
                    entity.position.y = that.BB.top -  entity.height;
                }
                entity.updateBB();
            }
        });
        
        // var wall = this;
        // this.game.entities.forEach(function (crash) {
        //     if (crash instanceof Crash && wall.BB.collide(crash.BB)) {

        //         if (wall.BB.left <= crash.lastBB.right) {
        //             crash.position.x = wall.BB.left - crash.width;
        //         } 
        //         if (wall.BB.right >= crash.lastBB.left) {
        //             crash.position.x = wall.BB.right + 1;
        //         }

        //         // if (that.BB.right <= entity.lastBB.left ){
        //         //     entity.position.x = that.lastBB.left - entity.width;
        //         // }  else if (that.BB.left <= entity.lastBB.right) {
        //         //     entity.position.x = that.BB.left - entity.width;
        //         // }

        //         // if (that.position.y + that.height <= entity.position.y 
        //         //     && that.position.y + that.height + that.velocity.y >= entity.position.y
        //         //     && that.position.x + that.width >= entity.position.x 
        //         //     && that.position.x <= entity.position.x + entity.width) {
        //         //     //console.log("collided with top of platform");
        //         //     that.velocity.y = 0;
        //         // }
        //     }
        // });

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.position.x - this.game.camera.x, this.position.y - this.game.camera.y, 4);

        if(document.getElementById("debug").checked){
            //this.BB.draw(ctx, 'red');
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        }

        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };

}