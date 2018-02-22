// I've broken each p5 sketch into its own file, the other two are just copies of this with key var name changes, so I'll explain everything in this file. First I set some variables, the circleUp and circleDown variables prevent the sketch from running on load...
var circleUp = false;
var circleDown = false;
var speed = 1
var xPos1 = 0
// I had to put each canvas into a variable, as I couldn't get multiple canvases to work on a single page, this is called instance mode in p5
var sketch001 = function(circleOne){
  // sketch001 is the first canvas, and I put the function in it which creates the canvas and the sketch on the canvas, circleOne
  circleOne.setup = function(){
  circleOne.createCanvas(600, 100)
  circleOne.background(255,255,255)
  circleOne.frameRate(30)
  circleOne.noLoop()
  }
  // the above are p5 methods to create the canvas, the noLoop method stops the sketch from auto running and looping forever
  circleOne.draw = function () {
    if (circleUp === true) {
      circleOne.background(255,255,255)
      xPos1 = xPos1 + speed;
      if (xPos1 > 600) {
        xPos1 = 0;
        }
        // the p5 sketch will only by drawn if circleUp is true, and it is false in its initial state
      circleOne.fill(255,243,127)
      circleOne.noStroke()
      circleOne.ellipse(xPos1, 52, 78, 78)
      }
      // draws a circle at x/y canvas coordinates: xpos1 and 52, the animation is created by xpos1 increasing in value by adding speed to itself
    if (circleDown === true) {
// the p5 sketch will only by drawn if circleDown is true, and it is false in its initial state
      circleOne.background(255,255,255)
      xPos1 = xPos1 + speed;
      if (xPos1 < 0 ) {
      xPos1 = 600;
      }
      circleOne.fill(255,243,127)
      circleOne.noStroke()
      circleOne.ellipse(xPos1,52, 78, 78)
    }
    // draws a circle at x/y canvas coordinates: xpos1 and 52, the animation is created by xpos1 decreasing in value by adding speed to itself
  }
  $("#circle1up").click(function() {
    speed = speed + 1
    circleUp = true
    circleOne.loop()
  })
  // event listener for the circle1up button, when clicked, it adds 1 to the speed value and changes circleUp to true, which sets off the function to create the sketch circleOne, it then sets circleOne to loop so it keeps sketching until told to stop
  $("#circle1down").click(function() {
    speed = speed - 1
    circleDown = true
    circleOne.loop()
  })
  // event listener for the circle1down button, when clicked, it subtracts 1 to the speed value and changes circleDown to true, which sets off the function to create the sketch circleOne, it then sets circleOne to loop so it keeps sketching until told to stop
}
new p5 (sketch001, 'canvasbox001')
// p5 method to create canvas instance, it takes the inputs of var, the var containing the function running the canvas creation and sketch,(sketch001), and the second input is the name of the element ID I want to place it in to 'canvasbox001'
