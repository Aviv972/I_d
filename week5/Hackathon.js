// var stock = [
// ("AAPL",3.5%), 
// ("FB", 2%),
// ("AMZN", -4%),
// ("TSLA", 8%),
// ("WIX", 1%),
// ("GME", 4%),
// ("LAZR", 3%),
// ("GOOGL", 4%),
// ("MSFT", 3.2%)
// ];



//  // BASIC FUNCTIONS


// function dragStart(event) {
//     //set the data to be dragged
//     console.log("target:", event.target)
//     console.log("id: ", event.target.id) // id: square1
//     event.dataTransfer.setData("text", event.target.id);
// }

// function dragDrop(event) {
// // console.log("event.target:",event.target) 
// // "event.target:" "<div id='square3' ondrop='dragDrop(event)' ondragover='allowDrop(event)'>square3</div>"
// event.preventDefault();
// // retrieve the data dragged

// let data = event.dataTransfer.getData("text");
// console.log("data: ", data) //data: square1 

//   //create a box for each one//
// let box = document.getElementById("aapl")
// event.target.appendChild(box);
// }


// function allowDrop(event) {
//                 event.preventDefault(); // Necessary. Allows us to drop.
//             }

//             //add dashes
// function allowEnter(event) {
//     event.target.classList.add('over');
// }

// //remove dashes
// function allowLeave(event) {
//     event.target.classList.remove('over');
// }

// function cal(argument) {
// 	if 
// }
