//   Iteración #6: Valores únicos

const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];
  function removeDuplicates(param) {
    for (xi = 0; xi < param.length; xi++) {
      var food = param[xi];
  
      for (z = 0; z < param.length; z++) {
        if (food == param[z] && z != xi) {
          param.splice(z, 1);
        }
      }
    }
    return param;
  }
  
  t = removeDuplicates(duplicates);
  console.log(t);
  