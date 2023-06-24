let imgFormal;

function preload() {
	imgFormal = loadImage('assets/formalCause.svg');
}

class FormalCause {
	constructor() {
		this.xText = 50;
		this.yText = 700;
		this.xImg = 300;
		this.yImg = 700;
	}

	// move() {
	// 	this.x = this.x + random(-5, 5);
	// 	this.y = this.y + random(-5, 5);
	// }

	display() {
		textSize(32);
		fill(205);
		text('Formal', this.xText, this.yText);
		// image(imgFormal, this.xImg, this.yImg);
	}
}
