
var circleUp = false;
var circleDown = false;

var speed = 1
var xPos1 = 0
var sketch001 = function(circleOne){
  circleOne.setup = function(){
  circleOne.createCanvas(600, 100)
  circleOne.background(255,255,255)
  circleOne.frameRate(30)
  circleOne.noLoop()
  }

  circleOne.draw = function () {

    if (circleUp === true) {

      circleOne.background(255,255,255)
      xPos1 = xPos1 + speed;
      if (xPos1 > 600) {
        xPos1 = 0;
        }
        circleOne.fill(255,243,127)
        circleOne.noStroke()
        circleOne.ellipse(xPos1, 52, 78, 78)
      }
    if (circleDown === true) {

      circleOne.background(255,255,255)
      xPos1 = xPos1 + speed;
      if (xPos1 < 0 ) {
      xPos1 = 600;
      }
      circleOne.fill(255,243,127)
      circleOne.noStroke()
      circleOne.ellipse(xPos1,52, 78, 78)
    }
  }
  $("#circl1eup").click(function() {
    speed = speed + 1
    circleUp = true
    circleOne.loop()
  })
  $("#circle1down").click(function() {
    speed = speed - 1
    circleDown = true
    circleOne.loop()
  })
}
new p5 (sketch001, 'canvasbox001')
