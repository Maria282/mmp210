/*
Final Project Presentation
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

function preload() {
    gif = loadImage('giphy.gif');
}

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
        title = '~ My final project ~';
        description = 'My final project will present some sound examples and some GIFs or videos that can interact with each other.';
        var w = 50;
        var h = w;
         for (let x = 0; x < width; x += w) {
            for (let y = 0; y < height; y += w) {

                noStroke();
                fill('#CFBAE8');
                ellipse(x, 30, (200, 100), w * 2); // title
                noStroke();
                fill('#CFBAE8');
                rect(x, 195, w, h * 4); // paragraph
                noFill();
                stroke('white');
                rect( x - w/4, y - w/4, w/2, w/2); // background
                stroke('#E4ADFF');
                ellipse(x, y, w, h); // bacground
        }
         
        }
    } 
    else if (currentSlide == 1) {
        title = "~ User interaction ~";
        description = "User will click their keyboard if the user wants to hear something (song, sound, etc) or if the user wants to see some images or videos. Also the user can move the mouse for more effects.";
        var w = 50;
        var h = w;
         for (let x = 0; x < width; x += w) {
            for (let y = 0; y < height; y += w) {

                noStroke();
                fill('#FFB78C');
                ellipse(x, 30, (200, 100), w * 2); // title
                noStroke();
                fill('#FFB78C');
                rect(x, 195, w, h * 4.5); // paragraph
                
                noFill();
                stroke('white');
                rect( x - w/4, y - w/4, w/2, w/2); // background
                stroke('#FFCBB6');
                ellipse(x, y, w, h); // bacground

        }
         
        }

    } 
    else if (currentSlide == 2) {
        title = "Graphics";
        description = "The graphics will use p5 shapes and colors, also my final project will have a kind of moving images (GIFs) that can interact with the sound or some effects that I will put in it. ";
        var w = 50;
        var h = w;
         for (let x = 0; x < width; x += w) {
            for (let y = 0; y < height; y += w) {

                noStroke();
                fill('#FFB8CD');
                ellipse(x, 30, (200, 100), w * 2); // title
                noStroke();
                fill('#FFB8CD');
                rect(x, 195, w, h * 7.5); // paragraph
                noFill();
                stroke('white');
                rect( x - w/4, y - w/4, w/2, w/2); // background
                stroke('#FFCCD7');
                ellipse(x, y, w, h); // bacground
                image(gif, 650, 400, 150, 150);
        }
         
        }

     // graphic Examples

    }
    
    // display title 
    text('Aclonica')
    textSize (80);
    fill("#A49CFA");
    stroke('black');
    textAlign(LEFT, TOP);
    text(title, 20, 5);

    //display description
    textSize(40);
    fill('#B2C4EB');
    stroke('black');
    text(description, 20, 200, width - 20);
    
    //slide button displlay
    // button background design
    fill('lightpink');
    stroke('black');
    strokeWeight(2);

    if  (currentSlide < numberOfSlides - 1) {
         rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5);
     }

    if (currentSlide > 0) {
        rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5);
    }
   
   //text design
    fill('black');
    textSize(25);
    noStroke();
    textAlign(LEFT, CENTER);

    if  (currentSlide < numberOfSlides - 1){
        text('Next', nextButtonX, nextButtonY, nextButtonW, nextButtonH);

    }
    
    if (currentSlide > 0) {
        text('Previous', prevButtonX, prevButtonY, prevButtonW, prevButtonH);
    }
    
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