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

// Iteración #2: Buscar la palabra más larga

var longitud = 0;
var superHeroe;
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  for (i = 0; i < param.length; i++) {
    if (param[i].length > longitud) {
      longitud = param[i].length;
      superHeroe = param[i];
    }
  }
  return superHeroe;
}
x = findLongestWord(avengers);

console.log(x);

//**Iteración #3: Calcular la suma**

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  var suma = 0;
  for (i = 0; i < param.length; i++) {
    suma = param[i] + suma;
  }
  return suma;
}

y = sumAll(numbers);
console.log(y);

//**Iteración #4: Calcular el promedio**
const numbersP = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    var suma = 0;
    for (i = 0; i < param.length; i++) {
      suma = param[i] + suma;
    }
    var promedio = suma / param.length;
    return promedio;

  }

 z = average(numbersP);
 console.log(z);

//**Iteración #5: Calcular promedio de strings**
const mixedElements = [6, 1,'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    var suma = 0;
    var sumaString = 0;
    for (i = 0; i < param.length; i++) {
      if(param[i].length == undefined){
          suma = param[i] + suma
      }else{
          sumaString = param[i].length + sumaString
      }
      }
       promedio = ( suma + sumaString ) / 2
      return promedio ;
  
    }

    w = averageWord(mixedElements);
    console.log(w);

 //   Iteración #6: Valores únicos    

 const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {

 for(xi = 0; xi < param.length; xi++) {  
     var food = param[xi]; 


  for(z = 0; z < param.length; z++){
    if(food == param[z] && z != xi){
        param.splice(z,1);
 
    }
  }
} 
return param
  }

  t = removeDuplicates(duplicates);
  console.log(t)

//Iteración #7: Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    // insert code
    var encontrado;
    for(a = 0; a <= param.length; a++){
        if(name == param[a]){
          encontrado = true
          break
        }else{
            encontrado = false
        }

    }
    return encontrado
  }

found = finderName(nameFinder,'Marc');
console.log(found)

//**Iteration #8: Contador de repeticiones**

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
   var arrContador = [];
   var suma = 0;
   var contador = 0;
  


 for(b = 0; b <= param.length; b++) {  
    var word = param[b]; 
   
    if ( param[b - 1] != undefined){
    arrContador.push(param[b - 1] + ' '+ suma);
    suma = 0;
}
    

 for(c = 0; c < param.length; c++){
   if(word == param[c] && c != b){
      
       suma = suma + 1;
      
   }


 }
} 
 return arrContador;
  }

  total = repeatCounter(counterWords)
  console.log(total)