//Iteración #7: Buscador de nombres

const nameFinder = [
    "Peter",
    "Steve",
    "Tony",
    "Natasha",
    "Clint",
    "Logan",
    "Xabier",
    "Bruce",
    "Peggy",
    "Jessica",
    "Marc",
  ];
  function finderName(param, name) {
    // insert code
    var encontrado;
    for (a = 0; a <= param.length; a++) {
      if (name == param[a]) {
        encontrado = true;
        break;
      } else {
        encontrado = false;
      }
    }
    return encontrado;
  }
  
  found = finderName(nameFinder, "Marc");
  console.log(found);