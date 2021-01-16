// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.setPosition(this.top, this.left);
  this.step();

};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top:  Math.floor(Math.random() * (700 - 400 + 1) + 400),
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// makeDancer.prototype.lineUp = function() {

// };

