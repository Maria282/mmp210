

// global scope
var catImage;
var guyImage;

function preload(){
	catImage = loadImage("cat.jpg");
	guyImage = loadImage("guy.jpg");

}


function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background(165, 118, 232, 91);

	// draw the image
	if (mouseIsPressed){
		image(guyImage, 0, 0, width, height);
	} else {
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
	//stroke('pink');
	//line(x + 10, y - -30, x + w + 250, y + 30);
	y+=100;

	textSize(50);
	//stroke('green');
	//strokeWeight(5);
	textStyle(BOLD);
	textAlign(CENTER, TOP);
	textFont('Verdana');

	
	var welcome = "HELP!" ;
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 395, 350);
}