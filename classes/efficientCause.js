let imgEfficient;

function preload() {
	imgEfficient = loadImage('assets/efficientCause.svg');
}

class EfficientCause {
	constructor() {
		this.xText = 50;
		this.yText = 400;
		this.xImg = 300;
		this.yImg = 500;
	}

	// move() {
	// 	this.x = this.x + random(-5, 5);
	// 	this.y = this.y + random(-5, 5);
	// }

	display() {
		textSize(32);
		fill(205);
		text('Efficient', this.xText, this.yText);
		// image(imgEfficient, this.xImg, this.yImg);
	}
}
