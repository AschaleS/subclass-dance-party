var makeBadDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer').addClass('badDancer').addClass('mouse');
};

makeBadDancer.prototype = Object.create(makeDancer.prototype);

makeBadDancer.prototype.constructor = makeBadDancer;

makeBadDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // this.$node = $('<span class="badDancer"></span>');
  //this.$node.toggle();
};