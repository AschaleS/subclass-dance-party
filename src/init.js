$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $("span").mouseover(function() {
      $(this).css("border-color", "blue");
    });
    $("span").mouseout(function() {
      $(this).css("border-color", '');
    });
  });




  // $("span").mouseover()(function() {
  //   // $('.mouse').css("color", "blue")
  //   console.log('yes');
  // });


  $('.lineUpButton').on('click', function(event) {
    var top = $('body').height() / 2;
    var left = 50;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(top, left);
      left += 100;
    }
  });

  $('.interact').on ('click', function(event) {
    var minDistance = 1000;
    var dancer1, dancer2;

    for(var i = 0; i < window.dancers.length; i++){
      var currentDancer = window.dancers[i];
      if(i + 1 === window.dancers.length){
        break;
      }
      var nextDancer = window.dancers[i + 1];
      var distanceB = Math.abs((currentDancer.top - nextDancer.top) ^ 2);
      var distanceA = Math.abs((currentDancer.left - nextDancer.left) ^ 2);
      var totalDistance = distanceA + distanceB;
      if(minDistance > totalDistance) {
        minDistance = totalDistance;
        dancer1 = currentDancer;
        dancer2 = nextDancer;
        console.log(dancer1, dancer2, minDistance);
      }
    }
    var top = $('body').height() / 2;
    var left = $('body').width()/ 2;
    dancer1.setPosition(top, left - 50);
    dancer2.setPosition(top, left + 50);
    dancer1.$node.addClass('sync');
    dancer2.$node.addClass('sync');
  });

});