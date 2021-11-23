//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }
  
  var x = sum(1, 7);
  console.log(x);