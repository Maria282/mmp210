

// global scope
var womanImage;

var womanX;

var counter = 0;
var x;
var y;

function preload(){
	womanImage = loadImage("woman.jpg");

}


function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;

	womanX = 10;

       

}

function mousePressed() {
	counter++;
	if (counter == 3) {
		counter = 0
	} 

}


function draw() {
	background(165, 118, 232, 91);

	//image(womanImage, 60, -100, 700,700);

	// draw the image
	if (counter == 0) {
		image(womanImage, womanX, height/-50, width + 500, height);

		womanX += -1;
		if (womanX > width) {
			womanX = 0;
		}

	}

	var paragraph = "When you have to stop going to college because of the corona-Virus";
	var w = textWidth(str);
	var x = 0;
	var y = 250;

	textSize(25);
	fill("black");
	textFont('Verdana');
	textAlign(CENTER);
	text(paragraph, x, y - 230, 500, 350);
	
	y+=100;

	

}