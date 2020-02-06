

function setup() {
	createCanvas(660, 670);
}

function draw() {
	background(165, 118, 232, 91)

	// shapes with xy coordinate + size


	// face area 
	fill(255,178,117,100);
	ellipse(200, 180, 200); 

	//right eye
	fill(0,0,0);
	ellipse(220,160,20);

	fill(255,255,255);
	ellipse(224,155,8); 

	//left eye
	fill(0,0,0)
	ellipse(160, 160,20,20); 

	fill(255,255,255)
	ellipse(164, 155, 8)

	// mouth
	fill(255,255,255)
	rectMode(CENTER);
	rect(200,220,20,15,10);

	// right ear
	fill(235,167,138,92)
	arc(290,180,40, 60, -HALF_PI, HALF_PI);
	arc(290,180,30, 50, -HALF_PI, HALF_PI);

	// shapes that are only xy points
	line(250,93,250,260)


}