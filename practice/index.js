const assert = require("assert");

console.assert(add(3,4) === 8, "not matched");
  
  
  function printPrimeNumbersBetween(numberString) {
   
    switch(numberString) {
        case 'one':
          console.log('1');
           break;
        case 'two':
            console.log('2');
            break;  
        case 'three':
            console.log('3');
             break; 
        case 'four':
            console.log('4');
            break;
    }


}/**
 * it prints multiplication of table
 * @param {number} tableNum 
 */
function printMultiplicationTable(tableNum) {
   for (i=1; i<=10; i++) {
     var z = i * tableNum;
     console.log(tableNum.toString() + '*' + i.toString() + '=' + z.toString());
   }
   var z = 'sdfad'
   
}
/**
 *  this function calculate the pythagrous formula 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
function calculatePythagorusFormulate(a, b) {
    let d;
    d = squareRoot(square(a) + square(b));//4*4 + 3*3 =25; 25**(1/2)=5
    return d;
}
/**
 * this  function converts centigrate to fahrenheit
 * @param {number} a 
 * @returns 
 */
function canvertCentigrateToFahrenheit(a) {
    return (a * (9/5)) + 32;
}

/**
 * this function converts fahrenheit to centigrate
 * @param {*number} a 
 * @returns 
 */
function convertsFahrenheitToCentigrate(a) {
    let c;
    c = (a - 32) * (5/9);
    return c;
}
/**
 * this function calculate qudratic root 
 * @param {*number} a 
 * @param {*number} b 
 * @param {*number} c 
 * @returns [root1:number, root2:number]
 */
function calculateQuadraticRoots(a, b, c ) {
    const x = ((-b) + squareRoot((square(b) - (4 * a * c))))/2;//x=(-b+((b*b)-4*a*c)**(1/2))/2
    const y  = ((-b) - squareRoot((square(b) - (4 * a * c))))/2;//y=(-b-((b*b)-4*a*c)**(1/2))/2
    return [x, y];
}

/**
 *  it is additon function
 * @param {*number} a 
 * @param {*number} b 
 * @returns number
 */
 function add(a, b) {
   return  a + b;
}
/**
 * it is multiplication function
 * @param {number} a 
 * @param {*number} b 
 * @returns 
 */
function multiply(a, b) {
  return a * b;
} 
/**
 * it is subtraction function
 * @param {number} a 
 * @param {*number} b 
 * @returns 
 */ 
function subtraction(a, b) {
    return a - b;
}
/**
 * it is division function
 * @param {number} a 
 * @param {*number} b 
 * @returns 
 */
function division(a, b) {
     return a / b;
}
/**
 * it is remainder function
 * @param {number} a 
 * @param {*number} b 
 * @returns 
 */
function remainder(a, b) {
   return  a % b;
}
/**
 * it is square function
 * @param {number} a 
 * @returns 
 */
function square(a) {
    return a * a;
}
/**
 * it is square root function
 * @param {number} a 
 * @returns 
 */
function squareRoot(a) {
    return  a ** (1/2)
}


 
function main() {
 // printPrimeNumbersBetween(1, 100);
 // console.log(add(1,3)); // 4
//   console.log(multiply(3,5));//15
 //console.log(subtraction(44,33));//11
//console.log(division(55,5));//11
//console.log(remainder(34,4));//2
   //console.log(square(2));//4
   //console.log(squareRoot(16));//
//   printMultiplicationTable(5);
  //console.log(calculatePythagorusFormulate( 4, 3));
  //console.log(canvertCentigrateToFahrenheit(25));
  //console.log(convertsFahrenheitToCentigrate(45));
//   console.log(calculateQuadraticRoots(1, 6, 8));
}

main();