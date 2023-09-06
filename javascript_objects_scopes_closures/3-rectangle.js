#!/usr/bin/node
module.exports = class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
}
print() 
    if (!this.width || !this.height) {
        console.log("Invalid rectangle dimensions");
        return;
    }

    const row = 'X '.repeat(this.width).trim();
    for (let i = 0; i < this.height; i++) {
        console.log(row);
    }
    