// variables

var a; // declaration.
var b = 'b' // initialization.
b = 'bb' //re-initialization.
var a = 'aa' // re-declaration

var fruit = "Apple";

function fruitConsume() {
  console.log(fruit); // Apple for global scope
}

fruitConsume() // Apple

//Attention

//Tener cuidado cuando no declaramos la variable, ella puede ser utilizada como global y no como bloque.


function colors() {
  color = "red";
  console.log(color); // red
}

console.log(color) // red too