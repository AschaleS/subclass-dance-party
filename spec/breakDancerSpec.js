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
    //breakDancer.$node.addClass('break');
    expect(breakDancer.$node.hasClass('break')).to.be.equal(true);
  });

  // // it('should have a classname called image', function() {
  // //   expect($('.topbar').hasClass('lineUpButton')).to.equal(true);
  // // });

  // // it('should have a button that puls the dancers in line', function() {
  // //   // sinon.spy(breakDancer.$node, 'toggle');
  // //   //lineUpButtonbreakDancer.step();
  // //   $(".lineUpButton").trigger("click");
  // //   expect('click').toHaveBeenTriggeredOn('.lineUpButton');
  // //   // expect($(document.body)'lineUpButton').clicked).to.be.true;
  // it('should have a button that puts the dancers in line', function() {
  //   sinon.spy($(), 'setPosition(top, left)');
  //   $(".lineUpButton").trigger("click");
  //    expect(setPosition(top, left)).to.have.been.called;
  // });

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