
//      //Give to all paragraphs inside the <article> tag the class of para_article.//

// // function insert_tag() {
// //  var element = document.getElementsByTagName('p');
// // 	var tag = document.createElement('className');               
// // 	var node = document.createTextNode("para_article");
// // 	tag.appendChild(node);              
// // 	element.appendChild(tag);    
// // }

// // function insert_tag() {
// //   var element = document.getElementsByTagName('p');
// //   element.className.add("para_article");
// // }
 
//      //Remove the last paragraph in the article.//


// function remove_p() {
// 	var elmnt = document.getElementsTagName('p');
// 	elmnt.remove();
// }

//      //Add an event listener so that when you click on the h2, it is removed from the DOM.//

//  let x = document.getElementById("jsstyle");
//         console.log(x);

// x.addEventListener("click", XRespondClick);

// document.querySelector('h2').addEventListener("click", ZRespondClick); 


// function XRespondClick(e) {
//     alert("h2 is Clicked")

//     x.style.backgroundColor = 'red';

//     x.style.color = 'blue';

//     // Prevent Propagation
//     e.stopPropagation()
// }


// function ZRespondClick(e) {
//     alert("h2 is clicked")

// }


//    //Set the font size of the h1 to be a random pixel size from 0 to 100//


// document.getElementById("jsstyleh1").style.fontSize = "80px";


//   //Hide the 1st paragraph, when it’s clicked//


//  let y = document.getElementById("1st");
//         console.log(x);

// y.addEventListener("click", XRespondClick);

// document.querySelector('p').addEventListener("click", ZRespondClick); 


// function XRespondClick(e) {
//   document.getElementById("1st").style.display = "none";


//     // Prevent Propagation
//     e.stopPropagation()
// }


// function ZRespondClick(e) {
//     alert("p is clicked")

// }


//    //Get the values from the inputs and append them to the end of the html, inside a table.//

// let firstselect = document.getElementById('1st');
// console.log(firstselect);


// function function_last() {
// 	firstselect.insertAfter('last');
// }

//  //function has to collect all the bold items inside the paragraph.//


// // function bold() {
// // 	var elmnt_b = document.getElementById('Bold');
// // 	elmnt_b.getBold_items();
// // }

// //First create a list of all bold items 
// var bold_Items;
// window.onload = getBold_items();
 
// // Collect all <strong> tags
// function getBold_items() 
// {
//   bold_Items = document.getElementsByTagName('strong'); 
// }

// function highlight() 
// {
//    for (var i=0; i<bold_Items.length; i++)
//    {                                                    
//     bold_Items[i].style.color = "darkblue";
//     }9
// }

// // On mouse out highlighted words become black
// function return_normal()
// {
//   for (var i=0; i<bold_Items.length; i++) 
//   {
//        bold_Items[i].style.color = "black";
//   }
// }

     //Volume Of A Sphere//
 
// function calculator() {
// 	num1 = document.getElementById('radius');
//     num2 =  Math.PI ;
  
// document.getElementById('volume').innerHTML = pow(num2,3) * num1 ;
// }

function calculateVolume(){
	var volume;
    var radius = document.getElementById('radius').value;
     volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume;
    return false 
}

document.getElementById("MyForm").onsubmit = calculateVolume;





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