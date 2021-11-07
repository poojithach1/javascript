function swaping(a,b) {
    // let temp;
    // temp=a;
    // a=b;
    // b=temp;

    [a, b]=[b,a]
    console.log(`value ${a}`);
     console.log(`value ${b}`);
}
// swaping(44,22);



function celsiusToFahrenheit(f) {
    let c;
    c=(f-32)*5/9;
    return c;
}
// console.log(celsiusToFahrenheit(44));
  

function randomNumbers(h,l) {
    let a = Math.random()*(h-l)+l;
     return a
}
// console.log(randomNumbers(50,1));


function checkNumber(num) {
    if(num > 0) {
    console.log( 'Positive');
    } else if(num == 0) {
         console.log('zero');
    }else {
        console.log('negative') ;
    }
}
// (checkNumber(44));

function checkNumber(number) {
    if( 0 >= number) {
        if(0 > number){
          console.log("number is negative")
        } else {
          console.log("   number is equal")
        }
    }else {
    console.log("number is positive")
    }
}



function evenOddNumber(number) {
    if (number % 2 == 0) {
        console.log('it is even number');
    }else {
        console.log('it is odd mumber');
    }
}
// evenOddNumber(24);


// function largeNumber(a,b,c){
//     if(a>b && a>c) {
//         return a;
//     } else if(b>a && b>c){
//         return b;
//     } else  {
//         return c;
//     }
// }
// console.log(largeNumber(144,2,66));

function largeNumber(a,b,c) {
    let largest = Math.max(a,b,c);
    return largest;
}


function calcutaleMails (a){
let b=0.6214 * a;
return b;
}
// console.log(calcutaleMails(5));


function primeNumbers(a,b) {
   for(let i=a; i<b; i++) {
      flag = 0;
      for(let j=2; j<i ;j++){
          if(i%j == 0) {
              flag = 1;
              break;
          }
      }
      if (i > 1 && flag == 0) {
        console.log(i);
    }
   } 
}
// console.log(primeNumbers(1,50))

function factorial(n) {
    if (n==0 || n==1) {
       return 1;
    }else if (n>1){
        return n * factorial(n-1);//using recursion
    }else{
        return error;
    }

}
// console.log(factorial(10));

function factorialNumber(n){
    let p=1;
    if (n==0 || n==1){
        return 1;
    } else  {
        for (let i=1; i<=n; i++) {
            // console.log('fact', i);
               p = p * i;
        }
        return p
    }
}
// console.log(factorialNumber(6))


function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }
 console.log(sum(-5))