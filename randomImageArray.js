
let imgs = []

let randomButton

let canvas

let namesArray = ['jon', 'man', 'dylan', 'ethan']

let name = 0
let randImage = 0

function preload(){
	for(let i = 0; i<3; i++){
		imgs[i] = loadImage('images/' + i + '.jpg')
	}
}


function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.style('z-index', '-1')
canvas.position(0, 0)

randomButton = createButton('Random Image and Name')
randomButton.mousePressed(randImageName)

print(imgs)
imageMode(CENTER)

}

function randImageName(){
	randImage = random(imgs.length)
	name = int(random(namesArray.length))
}


function draw(){
background(255)
image(imgs[randImage], windowWidth/2, windowHeight/2)
textSize(200)
fill(200, 30, 100)
text(namesArray[name], 400, 300)
}