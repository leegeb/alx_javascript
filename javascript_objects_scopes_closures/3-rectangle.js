#!/usr/bin/node
module.exports = class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.w = width;
            this.h = height;
        }
    }
    print() {
        for (let i = 0; i < this.h; i++) {
            for (let i = 0; i < this.w; i++) {
                process.stdout.write("X");
            }
            console.log();
        }
    }
}