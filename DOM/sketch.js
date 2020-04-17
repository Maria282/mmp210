/*
dom example
4.15.2020
*/
var slider;
var input;


function setup() {
	createCanvas(640, 360);
	//canvas.parent("sketch");
	//colorMode(HSB, 255);

	input = createInput('Where are you from?');
	input.position(630, 270);

	button = createButton('submit');
	button.position(input.x + input.width, 270);
	button.mousePressed(pattern);

    var reset = createButton('Reset');
    reset.position(860, 270);
    reset.mousePressed(resetText);

    var patternButton = createButton('New pattern');
    patternButton.mousePressed(pattern);
    patternButton.position(630, 620);

    var saveButton = createButton('Save Image');
    saveButton.mousePressed(save);
    saveButton.position(730, 620);
    
    createP('Change Color');
    slider = createSlider(0, 255, 127);
    slider.position(870, 620)
    slider.input(pattern);

    pattern();

  
}

function resetText() {

	text(input.value(''));
	pattern('');

}


function saveImage() {
	save("pattern.png");
}

function pattern() {
    background(slider.value(), 255, 255);

    for (let x = 0; x < width; x += 100) {

    	

    	let s = random(40, 120);
    	let y = random(s/2, height - s/2);

    noStroke();
    fill(255, 90, 89, 100);
    ellipse(x, random(100, 300), random(200,100));
    noStroke();
    fill(185, 107, 232, 91);
    ellipse(x, random(150, 50), random(100, 150));
    noStroke();
    fill(255, 232, 66, 100);
    ellipse(x, random(200, 400), random(100, 100));
    noStroke();
    fill(91, 255, 99, 100);
    ellipse(x, random(50, 300), random(200, 300));

    textAlign(CENTER, CENTER);
    textSize(80);
    fill('black');
    stroke('white');
    strokeWeight(20);
    text(input.value(), width/2, height/2);

   


    }

}
