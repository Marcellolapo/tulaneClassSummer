let backgroundMusic

let canvas

let playButton

let modellistaFont

let upsideDownCup 

let xSpeed = 5
let ySpeed = 4

function preload(){

	backgroundMusic = loadSound('scott-buckley-moonlight(chosic.com).mp3')
	modellistaFont = loadFont('modellista.ttf')

	upsideDownCup = loadImage('upside-down-cup.png')
}

function setup(){

	rectMode(CENTER)
	imageMode(CENTER)

	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)


	playButton = createButton('Play Music')
	playButton.position(windowWidth-180, 15)
	playButton.mousePressed(playBackgroundMusic)

	furbyX = windowWidth/2
	furbyY = windowHeight/2

	furbyZ = windowWidth/2-50
	furbyA = windowHeight/2-50

	furbyB = windowWidth/2+50
	furbyC = windowHeight/2+50

}

function playBackgroundMusic(){
	if(!backgroundMusic.isPlaying()){
			backgroundMusic.loop()
			playButton.html('Pause Music')
	}else{
			backgroundMusic.pause()
			playButton.html('Play Music')
	}
}




function draw(){

background(13, 29, 61)

strokeWeight(4)

image(upsideDownCup, furbyX, furbyY, 50,50)

image(upsideDownCup, furbyZ, furbyA, 50,50)

image(upsideDownCup, furbyB, furbyC, 50,50)

furbyX = furbyX + xSpeed
furbyY = furbyY + ySpeed
furbyZ = furbyZ + xSpeed
furbyA = furbyA + ySpeed
furbyB = furbyB + xSpeed
furbyC = furbyC + ySpeed

if(furbyX >= windowWidth -25 || furbyX <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyY >= windowHeight -25 || furbyY <= 25){
		ySpeed = ySpeed * -1
	}




if(furbyZ >= windowWidth -25 || furbyZ <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyA >= windowHeight -25 || furbyA <= 25){
		ySpeed = ySpeed * -1
	}




if(furbyB >= windowWidth -25 || furbyB <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyC >= windowHeight -25 || furbyC <= 25){
		ySpeed = ySpeed * -1
	}







fill(0)

textFont(modellistaFont)
textSize(80)
fill(255)
textAlign(CENTER)
text('Shuffle', 150, 100,)






}








function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}