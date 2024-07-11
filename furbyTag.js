let furby

//position of furby
let furbyX
let furbyY

//furby speed
let xSpeed = 3
let ySpeed = 3

let score = 0

let mouseDist

let startBool = true
let winBool = false

function preload(){
	furby = loadImage('furby.png')

}

function setup(){
	createCanvas(windowWidth, windowHeight)
	furbyX = windowWidth/2
	furbyY = windowHeight/2

	imageMode(CENTER)
}

function draw(){
	if(startBool == true){
		startGame()
	}

	if(winBool == true){
		winGame()
	}
}

//the function for our game
function startGame(){
	background(0)

	fill(255)
	textSize(25)
	text('Tag the Furby! Your score is ' + score + ' points', 0,100)

	image(furby, furbyX, furbyY, 50,50)

	

	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)


	furbyX = furbyX + xSpeed
	furbyY = furbyY + ySpeed

	if(furbyX >= windowWidth -25 || furbyX <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyY >= windowHeight -25 || furbyY <= 25){
		ySpeed = ySpeed * -1
	}

	if(mouseDist < 25){
		score ++
		furbyX = random(26,windowWidth -26)
		furbyY = random(26,windowHeight -26)

		xSpeed = xSpeed * 1.3
		ySpeed = ySpeed * 1.3
	}

	if(score == 10){
		startBool = false
		winBool = true
	}

}

//function for our win screen
function winGame(){
	background(random(255), random(255), random(255))
	fill(255)
	textSize(40)
	text('You Won!!', 10, 100)
	image(furby, windowWidth/2, windowHeight/2)
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}