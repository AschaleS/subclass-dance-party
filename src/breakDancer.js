var makeBreakDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('break').addClass('mouse');
  this.$node.html("<img class ='image' src='https://media0.giphy.com/media/w8q0hb61Dd6O0w6Uwc/source.gif'>");
  this.$node.addClass('image');

};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};