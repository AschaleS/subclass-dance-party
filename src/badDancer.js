var makeBadDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="Dancer"></span>');

};

makeBadDancer.prototype = Object.create(makeDancer.prototype);

makeBadDancer.prototype.constructor = makeBadDancer;

makeBadDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('bulge');
};