function myage (age) {
	let Mum = age * 2
	let Dad = age * 2.2
	console.log('My Mum age is ' + Mum);
}

//myage(20)

function myage (age) {
	let Mum = age * 2
	let Dad = age * 2.2
	return 'My Mum age is ' + Mum;
}

console.log(myage(20));
