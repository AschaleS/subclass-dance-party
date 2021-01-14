var makeBreakDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle('break');
};