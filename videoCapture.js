
let capture


function setup(){
createCanvas(windowWidth, windowHeight)

capture = createCapture(VIDEO)
capture.size(640, 480)
capture.hide()
}


function draw(){


image(capture, mouseX, mouseY)
ellipse(mouseX, mouseY, 50, 50)

}
