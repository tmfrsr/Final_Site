
var circle3Up = false;
var circle3Down = false;

var speed3 = 1
var xPos3 = 0
var sketch003 = function(circleThree){
  circleThree.setup = function(){
  circleThree.createCanvas(600, 100)
  circleThree.background(255,255,255)
  circleThree.frameRate(30)
  circleThree.noLoop()
  }

  circleThree.draw = function () {

    if (circle3Up === true) {

      circleThree.background(255,255,255)
      xPos3 = xPos3 + speed3;
      if (xPos3 > 600) {
        xPos3 = 0;
        }
        circleThree.fill(255,90,97)
        circleThree.noStroke()
        circleThree.ellipse(xPos3, 52, 78, 78)
      }
    if (circle3Down === true) {

      circleThree.background(255,255,255)
      xPos3 = xPos3 + speed3;
      if (xPos3 < 0 ) {
      xPos3 = 600;
      }
      circleThree.fill(255,90,97)
      circleThree.noStroke()
      circleThree.ellipse(xPos3,52, 78, 78)
    }
  }
  $("#circle3up").click(function() {
    speed3 = speed3 + 1
    circle3Up = true
    circleThree.loop()
  })
  $("#circle3down").click(function() {
    speed3 = speed3 - 1
    circle3Down = true
    circleThree.loop()
  })
}
new p5 (sketch003, 'canvasbox003')
