// Function that will clear all fields
function reset(){
document.getElementById('fahr').value = '';
document.getElementById('cels').value = '';
document.getElementById('kel').value = '';
}

// Create function to convert user input into different temperature values
function convert(degrees) {
var x = 0;
var y = 0;


// Check to see which field user fills in and calculates other
values and sets their fields equal to them
if (degrees == "fahrenheit") {
	x = (document.getElementById("fahr").value - 32) * 5 / 9;
	x = x.toFixed(2);
	document.getElementById("cels").value = x;
	y = (parseFloat(document.getElementById("fahr").value) + 459.67)* 5 / 9;
	y = y.toFixed(2);
	document.getElementById("kel").value = y;
	if(document.getElementById("fahr").value == ''){
	document.getElementById("cels").value = '';
	document.getElementById("kel").value = '';
	}
}
else if(degrees == "celsius"){
x = document.getElementById("cels").value * 9 / 5 + 32;
x = x.toFixed(2);
document.getElementById("fahr").value = x;
y = (parseFloat(document.getElementById("cels").value)) + 273.15;
y = y.toFixed(2);
document.getElementById("kel").value = y;
if(document.getElementById("cels").value == ''){
document.getElementById("fahr").value = '';
document.getElementById("kel").value = '';
}

		}
		else if(degrees == "kelvin"){
		x = (document.getElementById("kel").value - 273) * 9 / 5 + 32;
		x = x.toFixed(2);
		document.getElementById("fahr").value = x;
		y = document.getElementById("kel").value - 273;
		y = y.toFixed(2);
		document.getElementById("cels").value = y;
		if(document.getElementById("kel").value == ''){
		document.getElementById("fahr").value = '';
		document.getElementById("cels").value = '';
		}
		}
		}