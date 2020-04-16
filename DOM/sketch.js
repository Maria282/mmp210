/*
dom example
4.15.2020
*/

let imput, button, greeting;

function setup() {
	createCanvas(640, 360);
	pattern();
	

	input = createInput();
	input.position(560,275);

	var button = createButton("submit");
	button.position(input.x + input.width, 275);
	button.mousePressed(greet);

	var patternButton = createButton("Clean");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);

	greeting = createElement('h2', 'Where are you from?');
	greeting.position(560, 270);
    textAlign(CENTER);
	textSize(20);

	rSlider = createSlider(0, 255, 100);
	rSlider.position(560, 650);

}

function draw() {
	const r = rSlider.value();
	text(name, rSlider);
}

function pattern() {
	background('pink');

	for (let x = 0; x < 200; x++) {

        push();
        translate(random(width), random(height));
		rotate(0.1 * PI);
		text(name, random(width), random(height));
		pop();
	}


}


function greet() {
	const name = input.value();
	greeting.html("beautiful country");
	input.value('');


	for (let i = 0; i < 200; i++){
		push();
		fill(random(255), 255, 255);
		translate(random(width), random(height));
		rotate(random(2 * PI));
		text(name, 0, 0);
		pop();
	}
}

function saveImage() {
	save("pattern.jpg")
}

