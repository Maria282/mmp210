
//loop repeats something
for (var i = 0; i < 5; i++) {
	console.log('i', i);

}

/*
loop example
3.25.2020
*/

function setup() {
	createCanvas( 640, 360);
	noStroke();
}

function draw() {
	background(140, 171, 237, 93);
	

	for (let x = 110; x <= 500; x += 100) {
		
		ellipse(x, 100, 50)

		fill(255, 174, 128, 100);
		


	}
}
