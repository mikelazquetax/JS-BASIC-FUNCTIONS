//**Iteration #8: Contador de repeticiones**

const counterWords = [
    "code",
    "repeat",
    "eat",
    "sleep",
    "code",
    "enjoy",
    "sleep",
    "code",
    "enjoy",
    "upgrade",
    "code",
  ];
  function repeatCounter(param) {
    var arrContador = [];
    var suma = 0;
    var contador = 0;
  
    for (b = 0; b <= param.length; b++) {
      var word = param[b];
  
      if (param[b - 1] != undefined) {
        arrContador.push(param[b - 1] + " " + suma);
        suma = 0;
      }
  
      for (c = 0; c < param.length; c++) {
        if (word == param[c] && c != b) {
          suma = suma + 1;
        }
      }
    }
    return arrContador;
  }
  
  total = repeatCounter(counterWords);
  console.log(total);
  