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
