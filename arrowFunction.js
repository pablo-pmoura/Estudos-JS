/*function apresentar(nome) {
    return 'Meu nome é ' + nome
}

console.log(apresentar('Pablo')) 

const apresentar = function (nome) {
  return "meu nome é " + nome;
};
console.log(apresentar("Pablo"));

const arrow = (nome) => "meu nome é " + nome;
console.log(arrow("Pablo"));

const sum = (x, y) => x + y;
console.log(sum(5, 5)); */

// Arrow function com mais de 1 linha de instruçao

const checkNegativeNumber = (x, y) => {
  if ( x <= 0 || y <= 0) return true;
  return false;
}

const checkHighNumber = (x, y) => {
  if(x >= 10 || y >= 10) return true;
  return false; 
}


const sumLowNumbers = (x, y) => {
  if(checkNegativeNumber(x, y)) return 'Apenas numeros positivos'
  if(checkHighNumber(x, y)) return 'Apenas numeros de 1 a 9'
  return x + y;
}

console.log(sumLowNumbers(10, 20))
console.log(sumLowNumbers(-3, -2))
console.log(sumLowNumbers(5, 2))

// Arrow functions é um jeito rapido e curto para escrever uma função