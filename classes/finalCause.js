// let imgFinal;

// function preload() {
// 	imgFinal = loadImage('assets/finalCause.svg');
// }

class FinalCause {
	constructor() {
		this.xText = 50;
		this.yText = 1000;
		this.xImg = 25;
		this.yImg = 425;
	}

	// move() {
	// 	this.x = this.x + random(-5, 5);
	// 	this.y = this.y + random(-5, 5);
	// }

	display() {
		textSize(32);
		fill(205);
		text('Final', this.xText, this.yText);
		// image(imgFinal, this.xImg, this.yImg);
	}
}
