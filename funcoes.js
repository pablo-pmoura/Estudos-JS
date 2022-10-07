function checkHighNumber (x, y) {
    if (x >= 10 || y >= 10) return true;
    return false;
}

function checkNegativeNumber (x, y) {
    if(x <= 0 || y <= 0) return true;
    return false;
}

function sumLowNumbers (x, y) {
    if(checkHighNumber(x, y)) return 'Apenas numeros de 1 a 9'
    if(checkNegativeNumber(x, y)) return 'Apenas numeros positivos'
    return x + y;
}

console.log(sumLowNumbers(2, 3));
console.log(sumLowNumbers(-2, -3));
console.log(sumLowNumbers(20, 40));