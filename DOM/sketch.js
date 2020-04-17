/*
dom example
4.15.2020
*/
var blueSlider;

function setup() {
	createCanvas(640, 360);
	stroke(5);
    

    var patternButton = createButton('New pattern');
    patternButton.mousePressed(pattern);
    patternButton.position(630, 620);

    var saveButton = createButton('Save Image');
    saveButton.mousePressed(save);
    saveButton.position(730, 620);

    blueSlider = createSlider(0, 255, 200);
    blueSlider.input(pattern);

    pattern();

  
}



function saveImage() {
	save("pattern.png");
}

function pattern() {
    background("lightpink");

    for (let x = 50; x <= width; x += 100) {

    	let r = random(100);
    	let g = random(100, 200);
    	let b = random(blueSlider.value());

    	let s = random(40, 120);
    	let y = random(s/2, height - s/2);
     
    fill(r, g, b);
    ellipse(x, random(100, 200), random(200,100));
    fill(235, 77, 45, 92);
    ellipse(x, random(50, 100), random(100, 150));
    fill(97, 167, 255, 100);
    ellipse(x, random(200, 300), random(100, 150));
    fill(r, g, b);
    ellipse(x, random(300, 500), random(200, 500));
    fill(142, 235, 64, 92);
    ellipse(x, random(50, 300), random(200, 300));

   


    }

}
