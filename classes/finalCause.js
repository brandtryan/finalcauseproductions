let img;

function preload() {
	img = loadImage('assets/man.svg');
}

class EfficientCause {
	constructor() {
		this.x = 100;
		this.y = 400;
		this.w = 541;
		this.h = 1050;
	}

	// move() {
	// 	this.x = this.x + random(-5, 5);
	// 	this.y = this.y + random(-5, 5);
	// }

	display() {
		textSize(32);
		fill(205);
		text('Efficient', this.x, this.y);
		image(img, 250, 360, this.w, this.h);
	}
}
