

// global scope
var womanImage;
var catImage

var counter = 0;
var x;
var y;

function preload() {
	womanImage = loadImage("woman.jpg")
	catImage = loadImage("cat.jpg");

}


function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
}

function mousePressed() {
	counter++;
	if (counter == 2) {
		counter = 0;
	}
}

function draw() {
	background(165, 118, 232, 91);

	// draw the image
	if (counter == 0) {
		image(womanImage, 0, 0, width, height);
	} else if (counter == 1) {
		image(catImage, 0, 0, width, height);
	}


	var paragraph = "When you didn't do your homework and you have to present it in 5 minutes";
	var w = textWidth(str);
	var x = 0;
	var y = 250;

	textSize(25);
	fill("white");
	textFont('Verdana');
	textAlign(CENTER);
	text(paragraph, x, y - 230, 500, 350);
	
	y+=100;

	if (mousePressed){
	 paragraph = "HELP!" ;

}
	var end = map(frameCount, 0, 200, 0, paragraph.length);
	text(paragraph.substring(0, end), 395, 350);


}