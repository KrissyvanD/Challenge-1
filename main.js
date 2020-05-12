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