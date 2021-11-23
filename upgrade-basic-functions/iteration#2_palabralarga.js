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