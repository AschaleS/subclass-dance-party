var makeBadDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBadDancer.prototype = Object.create(makeDancer.prototype);

makeBadDancer.prototype.constructor = makeBadDancer;

makeBadDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('bulge');
};