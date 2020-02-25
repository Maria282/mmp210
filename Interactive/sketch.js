//position variables
var x = 200;
var y = 180;

     // size variables
var s = 100; 

     
function setup() {
	//setup scope
	createCanvas(660, 670);
	rectMode(CENTER);
}

function draw() {
	//draw scope
	background(165, 118, 232, 91)

	//svar x = mouseX;
	var y = mouseY;
	var offset = 20;

	// shapes with xy coordinate + size

 
	// face area 
	fill(255,178,117,100);
	ellipse(x, y, 200); 
	//x++;
	s++;
	//y++;

	//right eye
	fill(0,0,0);
	ellipse(x + offset, y - 20,20);

	fill(255,255,255);
	ellipse(offset + 4 + x, y - 25, 8); 

	//left eye
	fill(0,0,0)
	ellipse(x - offset - 20, y - 20,20); 

	fill(255,255,255)
	ellipse(x - offset - 16, y - 25, 8)

	// mouth
	fill(255,255,255)
	rectMode(CENTER);
	rect(200,y + 40,20,15,10);

	// shapes that are only xy points
	fill(71,42,14)
	rect(100,y - 5,35,185,10)
	rect(286,y - 5,50,185,10)
	rect(200,y - 81,235,40,10)

	// right cheek
	noStroke()
    fill(245,90,82)
	ellipse(240,y + 10,20);

	// left cheek
	noStroke()
	fill(245,90,82)
	ellipse(135,y + 10,20)

	// flower #1
	fill(245,196,93)
	ellipse(520,60,s/1.5)
	ellipse(500,80,s/1.5)
	ellipse(540,80,s/1.5)
	ellipse(520,100,s/1.5)

	// flower #2
	fill(245,69,59)
	ellipse(410,130,s/1.5)
	ellipse(390,150,s/1.5)
	ellipse(430,150,s/1.5)
	ellipse(410,170,s/1.5)

    // flower #3
    fill(101,114,255);
    ellipse(410,220,s/1);
    ellipse(390,240,s/1);
    ellipse(430,240,s/1);
    ellipse(410,220,s/1);

}
