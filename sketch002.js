
var circle2Up = false;
var circle2Down = false;

var speed2 = 1
var xPos2 = 0
var sketch002 = function(circleTwo){
  circleTwo.setup = function(){
  circleTwo.createCanvas(600, 100)
  circleTwo.background(255,255,255)
  circleTwo.frameRate(30)
  circleTwo.noLoop()
  }

  circleTwo.draw = function () {

    if (circle2Up === true) {

      circleTwo.background(255,255,255)
      xPos2 = xPos2 + speed2;
      if (xPos2 > 600) {
        xPos2 = 0;
        }
        circleTwo.fill(246,177,220)
        circleTwo.noStroke()
        circleTwo.ellipse(xPos2, 52, 78, 78)
      }
    if (circle2Down === true) {

      circleTwo.background(255,255,255)
      xPos2 = xPos2 + speed2;
      if (xPos2 < 0 ) {
      xPos2 = 600;
      }
      circleTwo.fill(246,177,220)
      circleTwo.noStroke()
      circleTwo.ellipse(xPos2,52, 78, 78)
    }
  }
  $("#circle2up").click(function() {
    speed2 = speed2 + 1
    circle2Up = true
    circleTwo.loop()
  })
  $("#circle2down").click(function() {
    speed2 = speed2 - 1
    circle2Down = true
    circleTwo.loop()
  })
}
new p5 (sketch002, 'canvasbox002')
