var makeBadDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer').addClass('badDancer').addClass('mouse');
  this.$node.html("<img class ='image' src='https://lh3.googleusercontent.com/proxy/nCmBCk-UkcbcJnCodcKC1ol5bVTpY_H_0NZDGIpHjXQhNsomyIV4ZpLBTYf73hb5szLMnuEXQ59Pk6ZkNk5RfAt8'>");
  this.$node.addClass('image');
};

makeBadDancer.prototype = Object.create(makeDancer.prototype);

makeBadDancer.prototype.constructor = makeBadDancer;

makeBadDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // this.$node = $('<span class="badDancer"></span>');
  //this.$node.toggle();
};