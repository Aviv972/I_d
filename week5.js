
     //Give to all paragraphs inside the <article> tag the class of para_article.//

// function insert_tag() {
//  var element = document.getElementsByTagName('p');
// 	var tag = document.createElement('className');               
// 	var node = document.createTextNode("para_article");
// 	tag.appendChild(node);              
// 	element.appendChild(tag);    
// }

// function insert_tag() {
//   var element = document.getElementsByTagName('p');
//   element.className.add("para_article");
// }
 
     //Remove the last paragraph in the article.//


function remove_p() {
	var elmnt = document.getElementsTagName('p');
	elmnt.remove();
}

     //Add an event listener so that when you click on the h2, it is removed from the DOM.//

 let x = document.getElementById("jsstyle");
        console.log(x);

x.addEventListener("click", XRespondClick);

document.querySelector('h2').addEventListener("click", ZRespondClick); 


function XRespondClick(e) {
    alert("h2 is Clicked")

    x.style.backgroundColor = 'red';

    x.style.color = 'blue';

    // Prevent Propagation
    e.stopPropagation()
}


function ZRespondClick(e) {
    alert("h2 is clicked")

}


   //Set the font size of the h1 to be a random pixel size from 0 to 100//


document.getElementById("jsstyleh1").style.fontSize = "80px";


  //Hide the 1st paragraph, when it’s clicked//


 let y = document.getElementById("1st");
        console.log(x);

y.addEventListener("click", XRespondClick);

document.querySelector('p').addEventListener("click", ZRespondClick); 


function XRespondClick(e) {
  document.getElementById("1st").style.display = "none";


    // Prevent Propagation
    e.stopPropagation()
}


function ZRespondClick(e) {
    alert("p is clicked")

}


   //Get the values from the inputs and append them to the end of the html, inside a table.//

let firstselect = document.getElementById('1st');
console.log(firstselect);

// let lastselect = document.getElementById('1st');
// console.log(select);
// let value1 = select.options[1].value;
// console.log(value1);

//2.
// let newOption = document.createElement('option');
// newOption.value = 'Work';
// newOption.text = 'Work';
// select.appendChild(newOption);

// //3
// let newOption2 = document.createElement('option');
// newOption2.value = 'Primary School';
// newOption2.text = 'Primary School';

//let firstselect = select[0];

function function_last() {
	firstselect.insertAfter('last');
}







//  var table = document.getElementById("sampleTable");
//  var newRow = document.createElement('tr');
// newRow.innerHTML = "<td>Row2 cell2</td>"
// table.appendChild(newRow); 

// }
// function getvalue() {
// 	// body...
// }
//   let form = document.getElementById('form1'); 


// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");
// element.appendChild(para);


// function insert_Row() {
//  var table = document.getElementById("sampleTable");
//  var newRow = document.createElement('tr');
// newRow.innerHTML = "<td>Row2 cell2</td>"
// table.appendChild(newRow); 

// }