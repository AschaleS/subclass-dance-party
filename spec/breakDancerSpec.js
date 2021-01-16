describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 50;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new makeBreakDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a classname called break', function() {
    expect(breakDancer.$node.hasClass('break')).to.be.equal(true);
  });

  describe('dance', function() {
    it('should call step at least once per half second', function() {
      sinon.spy(breakDancer, 'step');
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});