let backgroundMusic

let canvas

let playButton

let startButton

let modellistaFont

let upsideDownCup

let upsideDownCup2

let upsideDownCup3

let timer = 10

let xSpeed = 40
let ySpeed = 40
let zSpeed = 40
let aSpeed = 40
let bSpeed = 40
let cSpeed = 40

let startBool = true
let gameBool = false
let winBool = false
let loseBool = false

let furby

let mouseDist

let mouseDistWrong1
let mouseDistWrong2

function preload(){

	backgroundMusic = loadSound('scott-buckley-moonlight(chosic.com).mp3')
	modellistaFont = loadFont('Modellista.ttf')

	upsideDownCup = loadImage('upside-down-cup.png')
	upsideDownCup2 = loadImage('upside-down-cup.png')
	upsideDownCup3 = loadImage('upside-down-cup.png')
	furby = loadImage('furby.png')

}

function setup(){

	rectMode(CENTER)
	imageMode(CENTER)

	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)


	playButton = createButton('Play Music')
	playButton.position( 70, 150)
	playButton.mousePressed(playBackgroundMusic)

	startButton = createButton('Start Game')
	startButton.position(70, 300)
	startButton.mousePressed(startGame)

	

	furbyX = random(26,windowWidth -26)
	furbyY = random(26,windowHeight -26)

	furbyZ = random(26,windowWidth -26)
	furbyA = random(26,windowHeight -26)

	furbyB = random(26,windowWidth -26)
	furbyC = random(26,windowHeight -26)

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

function startScreen(){

background(13, 29, 61)

fill(0)

textFont(modellistaFont)
textSize(80)
fill(255)
textAlign(CENTER)
text('Shuffle', 150, 100,)

image(furby, furbyX, furbyY, 50,50)

image(upsideDownCup2, furbyZ, furbyA, 50,50)

image(upsideDownCup3, furbyB, furbyC, 50,50)


}
function startGame(){
startBool = false
gameBool = true
startButton.hide()
playButton.hide()
background(13, 29, 61)

strokeWeight(4)

image(upsideDownCup, furbyX, furbyY, 50,50)

image(upsideDownCup2, furbyZ, furbyA, 50,50)

image(upsideDownCup3, furbyB, furbyC, 50,50)

furbyX = furbyX + xSpeed
furbyY = furbyY + ySpeed
furbyZ = furbyZ + zSpeed
furbyA = furbyA + aSpeed
furbyB = furbyB + bSpeed
furbyC = furbyC + cSpeed

if(furbyX >= windowWidth -25 || furbyX <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyY >= windowHeight -25 || furbyY <= 25){
		ySpeed = ySpeed * -1
	}




if(furbyZ >= windowWidth -25 || furbyZ <= 25){
		zSpeed = zSpeed * -1
	}

	if(furbyA >= windowHeight -25 || furbyA <= 25){
		aSpeed = aSpeed * -1
	}




if(furbyB >= windowWidth -25 || furbyB <= 25){
		bSpeed = bSpeed * -1
	}

	if(furbyC >= windowHeight -25 || furbyC <= 25){
		cSpeed = cSpeed * -1
	}


textSize(100);
  text(timer, windowWidth/2, windowHeight/2);

  if (frameCount % 60 == 0 && timer > 0){
  	timer --;
  }
  if (timer == 0) {
    text("Hover over the correct cup", width/2, height*0.7);
    xSpeed = 0
	ySpeed = 0
	zSpeed = 0
	aSpeed = 0
	bSpeed = 0
	cSpeed = 0
  }




fill(0)

textFont(modellistaFont)
textSize(80)
fill(255)
textAlign(CENTER)
text('Shuffle', 150, 100,)

mouseDist = dist(mouseX, mouseY, furbyX, furbyY)
mouseDistWrong1 = dist(mouseX, mouseY, furbyZ, furbyA)
mouseDistWrong2 = dist(mouseX, mouseY, furbyB, furbyC)

if(timer == 0 && mouseDist < 25){
	winScreen()
}

if(timer == 0 && mouseDistWrong1 <25){
	loseScreen()
}

if(timer == 0 && mouseDistWrong2 <25){
	loseScreen()
}


}

function winScreen(){

startBool = false
gameBool = false
winBool = true

background(0)
textFont(modellistaFont)
textSize(80)
fill(255)
text('You Win', windowWidth/2, windowHeight/2)
}


function loseScreen(){

	startBool = false
	gameBool = false
	winBool = false
	loseBool = true

	background(100)

textFont(modellistaFont)
textSize(80)
fill(255)
text('You Win', windowWidth/2, windowHeight/2)

}



function draw(){

if(gameBool == true){
	startGame()
}


if(startBool == true){
	gameBool = false
	startScreen()
}

if(winBool == true){
	winScreen()

if(loseBool == true){
	loseScreen()
}
}

}





function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}