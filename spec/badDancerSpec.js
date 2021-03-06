describe('badDancer', function() {

  var badDancer, clock;
  var timeBetweenSteps = 50;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    badDancer = new makeBadDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(badDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a classname called badDancer', function() {
    expect(badDancer.$node.hasClass('badDancer')).to.be.equal(true);
  });

  describe('dance', function() {
    it('should call step at least once per half second', function() {
      sinon.spy(badDancer, 'step');
      expect(badDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(badDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(badDancer.step.callCount).to.be.equal(2);
    });
  });
});