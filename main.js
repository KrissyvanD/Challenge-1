// Making the calculation inbetween the elements
var textBlock = document.createElement("INPUT");

textBlock.setAttribute("type", "text");



function calculate(){

console.log(document.getElementById('throttleValues').value)
var throttle = document.getElementById('throttleValues').value;

if(throttle > 100){
	alert("Throttle value is too high, try again.");
} else{
	var speed = 0;
	var speed = (throttle*167.94);

	var fuel = throttle*3.1415926535897932384626433;

	document.getElementById("speedValues").value= speed;
	document.getElementById("fuelValues").value= fuel;

	console.log(speed);
	console.log(fuel);
}

}

// The countdown until the fuel is empty
//where will the countdown start
var counter = 100;
//the countdown will go lower with the second
var fuelCountdown = setInterval(function(){
  console.log(counter);
  counter--
 //alert that that there is almost no fuel left
  if (counter === 0) {
    alert("Fuel almost empty, please refill.");
    clearInterval(fuelCountdown);
  }
 //how quick will the countdown go
}, 1000);