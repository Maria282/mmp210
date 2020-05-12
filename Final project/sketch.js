/*
Final Project 
5.11.2020
*/

//global sound variables
var powerupSound, laserSound, pickSound, deadSound;
var music;

function preload() {
	// sounds
	powerupSound = loadSound('powerup.wav');
	music = loadSound('song.wav');
	laserSound = loadSound('laser.wav');
	deadSound = loadSound('deadsound.wav');

	menu = loadImage('menu.gif');
	laser = loadImage('laser.gif');
	heart = loadImage('heart.gif');
	dead = loadImage('dead.gif');
	back = loadImage('background.gif')
}

function setup() {
	createCanvas(640, 360);
	//powerSound.playMode('restart');

	createP('Move your mouse left to right if you want to hear more sound effects')
}

function draw() {
	if (music.isPlaying()) {
		 background(back);
	} else {
	    background('#A8AEFF');
	}    

    if (laserSound.isPlaying()) {
    	image(laser, 0, 110, 200, 200);
    } 

    if (powerupSound.isPlaying()) {
    	image(heart, 0, 0, 640, 360);
    	
    }

    if (deadSound.isPlaying()) {
    	image(dead, 0, 0, 640, 360);
    }

    var volume = map(mouseY, 0, height, 1, 0);
    music.setVolume(volume);

   

    var pan = map(mouseX, 0, width, -1, 1);
    music.pan(pan);
    
    
    fill('black');
    textSize(25);
    text('Press space (for the music), then W, E, R', 70, 330);
}

function keyPressed() {

	//play music
	if (keyCode == 32) {
		if (music.isPlaying()){
			music.pause();
		} else {
		music.play();
	    }
	}

	//play sound effects

	if (keyCode == 87) {
		laserSound.play();
	}

	if (keyCode == 69) {
		powerupSound.play();
	}

	if (keyCode == 82) {
		deadSound.play();
	}
	
}