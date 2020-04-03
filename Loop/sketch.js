
//loop repeats something
for (var i = 0; i < 5; i++) {
	console.log('i', i);

}

/*
loop example
3.25.2020
*/

function setup() {
	createCanvas( 640, 460);
	noStroke();
	rectMode(CENTER);

	}


function draw() {
	background("black");
	

	for (let x = 50; x < width; x += 50) {
		var r = random(0, 255);
		var g = random(0, 100);
		var b = random(100, 255);
		fill(r, g, b);

		ellipse(x, height/2, 40);
		fill("white");
		ellipse(x - 10, height/2 - 10, 10);
		ellipse(x + 10, height/2 - 10, 10);
		
        rect(x, height/2 + 10, 30, 10, 5);
		fill(255, 174, 128, 100);
		stroke(2);

		var r = random(100, 100);
		var g = random(0, 255);
		var b = random(0, 100);
		fill(r, g, b);

		ellipse(x, height/1.3, 10);


		var r = random(100, 100);
		var g = random(0, 255);
		var b = random(0, 100);
		fill(r, g, b);


		var r = random(100, 100);
		var g = random(0, 255);
		var b = random(0, 100);
		fill(r, g, b);

		ellipse(x, height/5, 10);


		var r = random(100, 100);
		var g = random(0, 255);
		var b = random(0, 100);
		fill(r, g, b);


		
		


	}
}
