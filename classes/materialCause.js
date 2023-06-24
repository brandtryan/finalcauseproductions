let imgMaterial;

function preload() {
	imgMaterial = loadImage('assets/materialCause.svg');
}

class MaterialCause {
	constructor() {
		this.xText = 50;
		this.yText = 100;
		this.xImg = 300;
		this.yImg = 25;
	}

	// move() {
	// 	this.x = this.x + random(-5, 5);
	// 	this.y = this.y + random(-5, 5);
	// }

	display() {
		textSize(32);
		fill(205);
		text('Material', this.xText, this.yText);
		image(imgMaterial, this.xImg, this.yImg);
	}
}
