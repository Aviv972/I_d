
let calcDisplay = document.getElementById('display')
console.log(calcDisplay)
let calstr = ""

// insert numbers and symbols//

function my_f(button) {
	//console.log(button);
	calstr = calstr + button
	calcDisplay.innerHTML = calstr
	console.log(calstr);

}

function result() {
	let equl = eval(calstr)
	console.log(equl);
	calcDisplay.innerHTML = equl

}

function clearing() {
	calstr = "";
	calcDisplay.innerHTML = 0

}