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