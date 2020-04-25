/*
Pattern #3
4.24.2020
*/

var bgSlider;
var greenSlider;

function setup() {
	createCanvas(500, 500);
	noStroke();


	input = createInput('How you feel?');
	input.position(690, 270);

	button = createButton('submit');
	button.position(input.x + input.width, 270);
	button.mousePressed(pattern);
	
	createP('Background Color');
	bgSlider = createSlider(0, 255, 61);
	bgSlider.position(875, 840)
	bgSlider.input(pattern);

	createP('Green Color');
	greenSlider = createSlider(0, 250, 154);
	greenSlider.position(875, 890)
	greenSlider.input(pattern);

	var patternButton = createButton('New Pattern');
	patternButton.position(690, 755);
	patternButton.mousePressed(pattern);

	var saveButton = createButton('Save');
	saveButton.position(780, 755);
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save('pattern.png');
}


function pattern() {
	background(bgSlider.value());

	var w = 30;
	var h = w;

	for (let x = 0; x <= width; x += w){
		for (let y = 0; y <= height; y += h){
			push();
			translate(x, y);

            var g = greenSlider.value(); // green
            var r = random(55, 155);
            var b = random(100, 150);

			
            stroke(r, g, b);
            strokeWeight(2);

            var randomChoice = random(4);
			if (randomChoice < 1) {
				line(0, 0, w, h);
			} else if (randomChoice < 2){
				 line(w, 0, 0, h);
			} else if (randomChoice < 3) {
				line(0, 0, w, h);
			} else if (randomChoice < 4) {
				line(w, 0, w, 0);
			}	
            
            pop();

            textAlign(CENTER, CENTER);
            textSize(70);
            fill('black');
            stroke('white');
            strokeWeight(20);
            text(input.value(), width/2, height/2);


		}
	}
}
