//Business Logic
  var pingPongOutput = []
var pingpong = function(input) {
  var numbers = parseInt(input)
    if ((numbers % 5 === 0) && (numbers % 3 ===0)) {
      pingPongOutput.unshift("Ping!Pong!")
    } else if ((numbers % 3 === 0) && (numbers % 5 !== 0)) {
      pingPongOutput.unshift("Ping!")
    } else if ((numbers % 5 === 0) && (numbers % 3 !== 0)) {
      pingPongOutput.unshift("Pong!")
    } else {
      pingPongOutput.unshift("Serve up a number.")
    }
console.log("the value of pingpong output = " + pingPongOutput);
  for (var index = 1; index === 1; index++) {
    var listItems = pingPongOutput.slice(0,1);
console.log("listeItems= " + listItems);
  }
  };

//jquery user interface
$(document).ready(function(){
  $("form#ping-pong").submit(function(){
  event.preventDefault();
  var pingPongInput = $("input#ping-pong").val();
  var result = pingpong(pingPongInput);

  $("#output").text(result);
  $("#result").show(result);
  });
});
