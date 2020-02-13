var x = 200;
var y = 180;

     // size variables
var s = 100; 

     
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
	ellipse(200, y - 100, 200); 
	x++;
	s++;
	y++;

	//right eye
	fill(0,0,0);
	ellipse(220,y - 100,20);

	fill(255,255,255);
	ellipse(224,y - 100,8); 

	//left eye
	fill(0,0,0)
	ellipse(160, y - 100,20,20); 

	fill(255,255,255)
	ellipse(164, y - 100, 8)

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
	ellipse(520,60,s/5)
	ellipse(500,80,s/6)
	ellipse(540,80,s/7)
	ellipse(520,100,s/8)

	// flower #2
	fill(245,69,59)
	ellipse(410,130,s/5)
	ellipse(390,150,s/6)
	ellipse(430,150,s/7)
	ellipse(410,170,s/8)

    // flower #3
    fill(101,114,255);
    ellipse(410,220,s/5);
    ellipse(390,240,s/6);
    ellipse(430,240,s/7);
    ellipse(410,220,s/8);

}