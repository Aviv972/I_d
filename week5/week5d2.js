
// function sayHi(phrase, who) {
//   alert("The sales end in 10min !");
// }

// setTimeout(sayHi, 5000, "Hello", "John");

 function insert_div() {
	var div = document.createElement('div');               
	var node = document.createTextNode("The sales end in 10min !");
	div.appendChild(node);
	div.style.border = "2px solid red" 
	document.body.appendChild(div)            
	  
}

//setTimeout(insert_div, 5000);

let timeleft = 10;
        let downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Finished";
            } else {
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
            //timeleft --;
        }, 1000);


        function Name() {
	alert("The sales end in 10min !");
}

 console.log(Name);