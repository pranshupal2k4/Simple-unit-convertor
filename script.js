let inputforms = 
	document.querySelectorAll(".conversion"); 
inputforms.forEach( 
	(form) => 
		(form.style.display = "none")); 
let category = document.getElementById( 
	"conversionCategory"); 
category.addEventListener( 
	"change", 
	function () { 
		let userInput = category.value; 
		inputforms.forEach( 
			(form) => 
				(form.style.display = 
					"none")); 
		document.getElementById(userInput).style.display = "block";}); 
document.getElementById( "temperatureConvertBtn").addEventListener("click", tempFn); 
document.getElementById("weightConvertBtn").addEventListener("click", weightFn); 
document.getElementById("lengthConvertBtn").addEventListener("click", lengthFn); 
document.getElementById("areaConvertBtn").addEventListener("click", areaFn); 
document.getElementById("VolumeConvertBtn").addEventListener("click", volumeFn); 
document.getElementById("timeConvertBtn").addEventListener("click", timeFn); 
document.getElementById("numberConvertBtn").addEventListener("click", numberFn); 
document.getElementById("currencyConvertBtn").addEventListener("click", currencyFn); 
function tempFn() { 
	let valInput = parseFloat(document.getElementById("temperatureInput").value); 
	let fromUnit =document.getElementById("fromTemperatureUnit").value; 
	let toUnit =document.getElementById("toTemperatureUnit").value; 
	let conversionFactors = { 
		celsius: 1, 
		kelvin: 274.15, 
		fahrenheit: 33.8, 
		rankine: 493.47,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)}`;
} 

function areaFn() { 
	let valInput = parseFloat(document.getElementById("areaInput").value); 
	let fromUnit = document.getElementById("fromAreaUnit").value; 
	let toUnit = document.getElementById("toAreaUnit").value; 
	let conversionFactors = { 
		squareMeter: 1, 
		squareKilometer: 0.000001, 
		squareCentimeter: 10000, 
		squareMillimeter: 1000000, 
		acre: 0.000247105, 
		hectare: 0.0001, 
		squareMile: 3.861e-7, 
		squareYard: 1.19599, 
		squareFoot: 10.7639, 
		squareInch: 1550.0031,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("areaResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
} 

function weightFn() { 
	let valInput = parseFloat(document.getElementById( "weightInput").value); 
	let fromUnit = document.getElementById("fromWeightUnit").value; 
	let toUnit = document.getElementById("toWeightUnit").value; 
	let conversionFactors = { 
		gram: 1, 
		kilogram: 0.001, 
		milligram: 1000, 
		metricTon: 0.000001, 
		longTon: 0.000984207, 
		shortTon: 0.00110231, 
		pound: 0.00220462, 
		ounce: 0.03527396, 
		carat: 5,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("weightResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`; 
} 

function lengthFn() { 
	let valInput = parseFloat(document.getElementById("lengthInput").value); 
	let fromUnit = document.getElementById("fromLengthUnit").value; 
	let toUnit = document.getElementById("toLengthUnit").value; 
	let conversionFactors = { 
		meter: 1, 
		kilometer: 0.001, 
		centimeter: 100, 
		milimeter: 1000, 
		mile: 0.000621371, 
		yard: 1.09361, 
		foot: 3.28084, 
		inch: 39.3701,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("lengthResult").textContent = `Result:${result.toFixed(2)} ${toUnit}`;
} 

function timeFn() { 
	let valInput = parseFloat(document.getElementById("timeInput").value); 
	let fromUnit = document.getElementById("fromTimeUnit").value; 
	let toUnit = document.getElementById("toTimeUnit").value; 
	let conversionFactors = { 
		second: 1, 
		millisecond: 1000, 
		minute: 1 / 60, 
		hour: 1 / 3600, 
		day: 1 / 86400, 
		week: 1 / 604800, 
		month: 1 / 2628000, 
		year: 1 / 31536000,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("timeResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`; 
}

function volumeFn() { 
	let valInput = parseFloat(document.getElementById("volumeInput").value); 
	let fromUnit = document.getElementById("fromVolumeUnit").value; 
	let toUnit = document.getElementById("toVolumeUnit").value; 
	let conversionFactors = { 
		liter: 1, 
		milileter: 1000, 
		cubicMeter: 0.001, 
		cubicCentimeter: 1000, 
		cubicYard: 0.00130795, 
		cubicFoot: 0.0353147, 
		cubicInch: 61.0237,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("volumeResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
} 

function numberFn() { 
	let valInput = parseFloat(document.getElementById("numInput").value); 
	let fromUnit = document.getElementById("fromNumberUnit").value; 
	let toUnit = document.getElementById("toNumberUnit").value; 
	let result=parseInt(valInput,fromUnit).toString(toUnit);
	document.getElementById("numberResult").textContent = `Result: ${result}`; 
}

function currencyFn() { 
	let valInput = parseFloat(document.getElementById("currencyInput").value); 
	let fromUnit = document.getElementById("fromCurrencyUnit").value; 
	let toUnit = document.getElementById("toCurrencyUnit").value; 
	let conversionFactors = { 
		inr: 1, 
		taka: 1.39, 
		yuan: 0.082, 
		euro: 0.0098, 
		yen: 1.68, 
		pkr: 3.22, 
		ruble: 0.91, 
		dollar: 0.011,
		pound: 0.0084,}; 
	let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]); 
	document.getElementById("currencyResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`; 
}