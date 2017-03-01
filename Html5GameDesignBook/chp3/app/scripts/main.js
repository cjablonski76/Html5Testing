console.log('\'Allo \'Allo!');

function onLoad() {
    var BACKGROUND_COLOR = "#dbdbdb";
    var PADDLE_WIDTH = 100;
    var PADDLE_HEIGHT = 10;
    var PADDLE_COLOR = "#000000";
    var BALL_COLOR = "#000000";
    var BALL_RADIUS = 10;

    if(Modernizr.canvas && Modernizr.canvastext) {
        Crafty.init(320, 480);
        Crafty.background(BACKGROUND_COLOR);
        Crafty.e('topPaddle, 2D, Canvas, Color')
                .attr({x: 100, y:10, w: PADDLE_WIDTH, h: PADDLE_HEIGHT})
                .color(PADDLE_COLOR);
        Crafty.e("bottomPaddle, 2d, Canvas, Color, Multiway")
              .attr({x: 100, y: 460, w: PADDLE_WIDTH, h: PADDLE_HEIGHT})
              .color(PADDLE_COLOR)
              .multiway(4, {LEFT_ARROW: 180, RIGHT_ARROW: 0});
        Crafty.e("gameBall, 2D, Canvas, Color, Collision")
              .attr({x: 40, y:240,
                     w: BALL_RADIUS, h: BALL_RADIUS,
                     xspeed: 2, yspeed: 3})
              .color(BALL_COLOR)
              .bind("EnterFrame", function() {
                  this.x += this.xspeed;
                  this.y += this.yspeed;
              })
              .onHit("bottomPaddle", function() {
                  this.yspeed *= -1;
                  this.y = 460 - BALL_RADIUS;
              })
              .onHit("topPaddle", function() {
                  this.yspeed *= -1;
                  this.y = 10 + BALL_RADIUS;
              });
    }
    else {
        var yes = confirm('Download a better browser??');
        if(yes) {
            window.location = 'http://google.com/chrome';
        }
    }
}