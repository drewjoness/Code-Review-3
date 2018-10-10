//Business Logic
var pingpong = function(input) {
  var numbers = parseInt(input)
    if ((numbers % 5 === 0) && (numbers % 3 ===0)) {
      return "Ping!Pong!"
    } else if ((numbers % 3 === 0) && (numbers % 5 !== 0)) {
      return "Ping!"
    } else if ((numbers % 5 === 0) && (numbers % 3 !== 0)) {
      return "Pong!"
    } else {
      return "Serve up a number."
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
