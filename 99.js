
var count = prompt("Choose a starting number");
var beer = "bottles";
var takeOut = 1;
while (count > 0) {
  // if (count == 1){
  //   var beer = "bottle"
  //   console.log("Take " + takeOut++  + " down, pass it around,")
  // }
  // if (takeOut == 1){
  //   console.log(count + " " + beer + " of beer on the wall");
  //   console.log("Take " + takeOut++  + " down, pass it around,")
  // }
    console.log(count + " " + beer + " of beer on the wall");
    console.log(count + " " + beer + " of beer,");
    console.log("Take " + takeOut++ + " down pass them around,");
    count = count - takeOut+1;
    // if (count > 0) {
    //   if (count == 1){
    //     var beer = "bottle"
    //     console.log("Take " + takeOut++ + " down pass it around,")
    //   }
    //     console.log(count + " " + beer + " of beer on the wall.");
    // } else {
    if (count < 1){
        var beer = "bottles"
        console.log("No more " + beer + " of beer on the wall.");
      }
        
    }
// }



// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall
// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall