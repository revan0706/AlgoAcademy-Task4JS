let x;
let y;

Boolean((x = +prompt("X:")));
Boolean((y = +prompt("y:")));

let a = x + y == 50 ? true : false;
let b = x == 50 || y == 50 ? true : false;

//if (a || b) {
//  alert("true");
//} else {
//  alert("false");
//}


let second = b || a ?  alert("true") : alert("false");