

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background(165, 118, 232, 91);

	var str = "MMP210 Class";
	var w = textWidth(str);
	var x = 0;
	var y = 250;

	textSize(75);
	fill("pink");
	textStyle(ITALIC);
	textFont('Brush Script MT');
	textAlign(LEFT,CENTER);
	text(str, x, y);
	stroke('pink');
	line(x + 10, y - -30, x + w + 250, y + 30);
	y+=100;

	textSize(30);
	stroke('green');
	strokeWeight(5);
	textStyle(BOLD);
	textAlign(CENTER, TOP);
	textFont('Verdana');

	
	var welcome = 'Welcome to my website';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}