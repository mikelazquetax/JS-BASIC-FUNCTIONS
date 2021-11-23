//**Iteración #5: Calcular promedio de strings**
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  var suma = 0;
  var sumaString = 0;
  for (i = 0; i < param.length; i++) {
    if (param[i].length == undefined) {
      suma = param[i] + suma;
    } else {
      sumaString = param[i].length + sumaString;
    }
  }
  promedio = (suma + sumaString) / 2;
  return promedio;
}

w = averageWord(mixedElements);
console.log(w);