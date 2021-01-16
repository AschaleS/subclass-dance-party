var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('blinkyDancer').addClass('mouse');
  this.$node.html("<img class ='image' src='http://www.pngall.com/wp-content/uploads/5/Joker-Movie-PNG-Image-HD.png'>");
  this.$node.addClass('image');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
