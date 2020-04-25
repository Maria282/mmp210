/*
Pattern #3
4.24.2020
*/

var wSlider;
var heightSlider;

function setup() {
	createCanvas(600, 600);
	noStroke();

	createP('Pixel Size');
	wSlider = createSlider(1, 100, 40);
	wSlider.input(pattern);

	createP('Height');
	heightSlider = createSlider(-10, height, 300);
	heightSlider.input(pattern);

	

	var patternButton = createButton('New Pattern');
	patternButton.mousePressed(pattern);

	var saveButton = createButton('Save');
	saveButton.mousePressed(saveImage);

	


	pattern();

}

function saveImage(){
	save('pattern.png');
}


function pattern() {
	background(51);

	var w = wSlider.value();  //width of one cell
	var h = w;    // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {

			let r = random (100, 250);  // red
			let g = random( 0, 100); // green
			let b = random (100, 155); // blue

			if (y > heightSlider.value()) {
				r += random(100, 200);
				g += random(50, 150);
			}

			fill(r, g, b);
			rect(x + random(10), y + random(10), w + random(20), h + random(100));

	}
}
	
}