
let furby 

let redVar
let greenVar
let blueVar
function preload(){
	//furby = loadImage('furby.png')
}

function setup(){

	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)
	background(random(255), random(255), random(255))
	redVar = random(0.255)
	greenVar = random(0.255)
	blueVar = random(0.255)
}



function draw(){
	
	
	background(redVar, greenVar, blueVar)

	for(let i=0; i<1000; i=i+30)
		line(windowWidth/2,0,i,windowHeight)

	for(let i=0; i<windowWidth; i=i+10){
		line(i, 0, i, windowWidth)

	}

	 for(let i=0; i<windowHeight; i=i+10)
	 	line(0,i,windowWidth,i)

	for(let i=0; i<100; i++){
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
	}

	ellipse(random(0,100), random(0,100), 50, 50)
	textSize(40)
	text('Hello World!', 100, 200)

	if(keyIsPressed == true){
		fill(200, 200, 100)
		ellipse(windowWidth, windowHeight, 100, 100)
	}else{
		fill(100, 200, 100)
		rect(windowWidth, windowHeight, 100, 100)
	}


}

function mouseClicked(){
	redVar = random(0,255)
	greenVar = random(0,255)
	blueVar = random(0,255)
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}