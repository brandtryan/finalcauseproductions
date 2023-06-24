let materialCause;
let formalCause;
let efficientCause;
let finalCause;

function setup() {
	createCanvas(windowWidth, windowHeight);
	materialCause = new MaterialCause();
	formalCause = new FormalCause();
	efficientCause = new EfficientCause();
	finalCause = new FinalCause();
}

function draw() {
	background(0);
	materialCause.display();
	efficientCause.display();
	formalCause.display();
	finalCause.display();
}
