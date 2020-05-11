/*
Final Project
5.10.2020
*/

var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 850;
var nextButtonY= 680;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button

var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

function setup() {
	createCanvas(960, 720);
}

function draw() {
    background(71);

    //text('slide ' + currentSlide, 100, 100);
    var title;
    var description;
    
    // setup each slide
    if (currentSlide == 0) {
        title = 'My final project';
        description = 'An interactive blablabla..';
         var g = random(100, 155); 
         var r = random(55, 155);
         var b = random(100, 150);

        var w = 30;
        var h = w;
        noFill();
        stroke(r, g, b);
        strokeWeight(2);
        
         for (let x = 0; x < width; x += w) {
            for (let y = 0; y < height; y += w) {
                push();
                translate(x, y);
                var randomChoice = random(4);
            if (randomChoice < 0) {
                line(0, 0, w, h);
            } else if (randomChoice < 2){
                 line(w, 0, 0, h);
            } else if (randomChoice < 3) {
                line(0, 0, w, h);
            } else if (randomChoice < 4) {
                line(w, 0, w, 0);
            }  
     pop();
        }
         
        }
    } 
    else if (currentSlide == 1) {
        title = "User interaction";
        description = "User will click blablabla..";
    } 
    else if (currentSlide == 2) {
        title = "Graphics";
        description = "The graphics will use p5 shapes and colors";

     // graphic Examples


    }
    
    // display title 
    textSize (80);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(title, 20, 100);

    //display description
    textSize(40);
    text(description, 20, 200, width - 20);
    
    //slide button displlay
    // button background design
    fill('lightpink');
    stroke(255);
    strokeWeight(2);

    if  (currentSlide < numberOfSlides - 1) {
         rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5);
     }

    if (currentSlide > 0) {
        rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5);
    }
   
    fill(255);
    textSize(25);
    noStroke();
    textAlign(LEFT, CENTER);

    if  (currentSlide < numberOfSlides - 1){
        text('Next', nextButtonX, nextButtonY, nextButtonW, nextButtonH);

    }
    
    text('Previous', prevButtonX, prevButtonY, prevButtonW, prevButtonH);
}

function mousePressed() {
    if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
        mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
        if (currentSlide < numberOfSlides - 1){
        currentSlide ++;
    }
}

    if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
        mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
        if (currentSlide > 0) {
        currentSlide--;
    }
}

}