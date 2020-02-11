var x = 200;
var y = 180;

     // size variables
var s = 200; 

     
function setup() {
	//setup scope
	createCanvas(660, 670);
}

function draw() {
	//draw scope
	background(165, 118, 232, 91)

	// shapes with xy coordinate + size


	// face area 
	fill(255,178,117,100);
	ellipse(x+100, y, s); 
	x++;
	//s++;

	//right eye
	fill(0,0,0);
	ellipse(x + 20,160,20);

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

	// shapes that are only xy points
	fill(71,42,14)
	rect(100,185,35,185,10)
	rect(286,185,50,185,10)
	rect(200,99,235,40,10)

	// right cheek
	noStroke()
    fill(245,90,82)
	ellipse(240,190,20);

	// left cheek
	noStroke()
	fill(245,90,82)
	ellipse(135,190,20)

	// flower #1
	fill(245,196,93)
	ellipse(520,60,15)
	ellipse(500,80,15)
	ellipse(540,80,15)
	ellipse(520,100,15)

	// flower #2
	fill(245,69,59)
	ellipse(410,130,15)
	ellipse(390,150,15)
	ellipse(430,150,15)
	ellipse(410,170,15)

    // flower #3
    fill(101,114,255);
    ellipse(410,220,15);
    ellipse(390,240,15);
    ellipse(430,240,15);
    ellipse(410,220,15);

}