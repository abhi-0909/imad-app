//counter code
var button = document.getElementById("counter");
button.onclick = function (){
  //Make a request to counter endpoint
  
  
  //capture the response and store it in a variable
  
  //Render the variable in the correct span
  counter = counter +1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
};