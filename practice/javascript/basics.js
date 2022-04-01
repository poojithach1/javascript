// Swap 2 integers present in variables num1 and num2 without using temporary variable
  function swapping(num1,num2) {
    console.log(`numb1: ${num1}`);
    console.log(`numb2: ${num2}`);
    let temp;
    temp=num1;
    num1=num2;
    num2=temp;
     [num1,num2] = [num2,num1]
    // num1=num1+num2;
    // num2=num1-num2;
    // num1=num1-num2;
    
    console.log(`numb1: ${num1}`);
    console.log(`numb2: ${num2}`);

  }
  swapping(5,3)


// Write a function which returns true if given value of number is an integer without using any inbuilt functions


function isInteger(num) {
  if(typeof(num) == 'number') {
    return true;
  }else {
    return false;
  }
}

// function isInteger(num) {
//   if(num+0 == num ) {
//     if(num!=)
//   }
// }

// console.log(isInteger(-1));
// console.log(isInteger('hi'));
// console.log(isInteger(true));
// console.log(isInteger(null));
// console.log(isInteger(-55));



// Create a function which returns a random number in the given range of values both inclusive

function randomNumber(a,b) {
  return Math.round(a+(b-a)*Math.random());
}
// console.log(randomNumber(1,3));


// Write a program to reverse a string
function reverseString(str) {
  let reverse ='';
  for(let i=str.length-1; i>=0;i--) {
     reverse=reverse+str[i];
  }  
 return reverse;
}
// console.log(reverseString('power project'));

// Write a program to reverse a string by words. Also show the reverse of each words in place
function reverseStringWords(str) {
  let word=str.split(" ");
  let strReverse="";
  for (let i=0;i<word.length;i++) {
   strReverse=strReverse+" "+reverseString(word[i]);
  }
  return strReverse;
}
// console.log(reverseStringWords('hi this is pooja'));

// Write a program to reverse a given integer number
function reverseNumber(num) {
  let str=String(num);
  let result='';
  for(let i=str.length-1;i>=0;i--) {
    result=result+str[i];
  }
  console.log('num='+ Number(result));
}
// reverseNumber(123456);


// Write a code to replace all the spaces of the string with underscores
function replaceString(str) {
//  console.log(str.split(' ').join('_'));
console.log(str.replace(/ /g,'_'));
}
// replaceString('hi this is pooja');




// Write a function which can convert the time input given in 12 hours format to 24 hours formatfum
function timeConvert(h,min,sec) {
  let date = new Date();
  date.setHours(h,min,sec);
  if(date.getHours()>=12) {
    console.log(date.getHours()-12 +'Pm');
  }else{
    console.log(date.getHours() + "Am");
  }
}
// timeConvert(23,33,24);


// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
function countCharacters (str,letter) {
  let a = str.indexOf(letter);
  let b = str.lastIndexOf(letter);
  let count = b-a;
  return count;
   
}
// console.log(countCharacters('The same algorithm can be layed out shorte','e'));



// Write a function to truncate a string to a certain number of letters
function truncateStarting(str,n) {
  console.log(str.slice(0,n));
}
// truncateStarting('There are several other helpful methods in strings',9);


function truncateEnding(str,n) {
  console.log(str.slice(-n));
}
// truncateEnding('There are several other helpful methods in strings',9);



// Write a code to truncate a string to a certain number of words
function truncateStartingWord(str,n) {
  let words=str.split(' ');
  console.log(words.slice(0,n));
}
// truncateStartingWord('To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.',7);

function truncateEndingWord(str,n) {
  let words = str.split(' ');
  console.log(words.slice(-n));
}
// truncateEndingWord('To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.',7);



// Create a regular expression to validate if the given input is valid Indian mobile number or not
function validMobileNumber(str) {
  if(str.includes("+91")) {
    console.log('it is Indian Number');
  } else {
    console.log('it is not Indian Number');
  }
}
// validMobileNumber('+91_9923545699');
// validMobileNumber('+23_2345678913');


// Write a function which returns a list of elements which contains at least one character as digit
function atlestOneDigit(str) {
  let regexp = /\d/g;
  if(str.match(regexp)) {
    console.log('it has at least one character as digit');
  }else{
     console.log('it does not containe digit');
  }
}
// atlestOneDigit('it is not a number');
// atlestOneDigit('it is contains 2 digits');



// Write a function which checks if a given search text is present either in the beginning of the first name or the second name
function searchText(search,name) {
   let word = name.split(' ');
   let n = word.length-1;
   let firstName = word[0];
   let lastName = word[n];
   if(firstName.includes(search) || lastName.includes(search)) {
     console.log('search text present either in begining of the firstName or lastName');
   } else{
     console.log('search text is not present nither firstNmae nor last name');
   }
}
// searchText('mo','poojitha chitturi');
// searchText('mo','mohan teja chitturi');


// Write a function to chop a string into chunks of a given length and return it as array


function chopString(str,n) {
  let a = Math.floor(str.length/n);
  let array =[];
  for (let i=0; i<(n+1); i++) {
    array.push(str.slice(a*i,(a*i)+a));
  }
   return array;
}
// console.log(chopString('Extracts the last element of the array and returns it',5));



// Write a code to remove all the vowels from a given string
function  removeVowels(str) {
   console.log(str.split(/a|e|i|o|u/g).join(''));
}
// removeVowels('create a function which return random number');


// Create a function which returns random hex color code
function randomHexColor() {
  let max = 0xffffff;
  let min = 0x000000;
  let random = Math.round(min+((max-min)*Math.random()));
  console.log( Number(random).toString(16));
}
// randomHexColor();







// Write a function which accepts two valid dates and returns the difference between them as number of days

function numOfDays(date1,date2) {

}
//


// Design a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface
/**
 * it is mini calculator
 * @param {number} a 
 * @param {*number} b 
 * @returns object: { sum:fn, difference:fn, product:fn , dividend: fn }
 */
function Calculator(a,b) {
  return {
    sum: function() {
      return a+b;
    },
    difference: function() {
      return a-b;
    },
    product: function() {
      return a*b;
    },
    dividend: function() {
      return a/b;
    }
  };
}

let calc12And5 = Calculator(12, 5);
console.assert(calc12And5.sum() === 17, "calc: test 1");                       // 17
console.log(calc12And5.difference());                // 7
console.log(calc12And5.product());                   // 60
console.log(calc12And5.dividend());                  // 2



// Design a private counter function which exposes increment and retrive functionalities
/**
 * it exposes increment ,decrement and retrive functionalities
 */
function privateCounter() {
  return {
    step:0,
    increment:function(value = 1) {
      return this.step += value;
    },
    decrement: function (value = 1) {
      return this.step -= value;
    },
    retrieve: function() {
      console.log(this.step);
    }
  };
}

let counter = privateCounter();

console.log(counter.increment(45));
console.log(counter.decrement(10));
counter.retrieve();             // 2
console.log(counter.increment(5));
console.log(counter.increment(1));
counter.retrieve();  
console.log(counter.decrement(12));


// Write a polyfill for bind function

// Write a function which will create a function bounded to the context like bind, but can be overridden when the context is set explicitly



// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

// Create a function which takes another function as an argument and makes it eligible for currying or partial application


// Design a function which helps to do debouncing


// Design a function which helps to do throttling


// Design an interface which limits the number of function calls by executing the function once for a given count of calls


// Write a singleton function to create an object only once


// Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon


// Create a range function which returns an array for the provided inputs as start and end


// Write a function which takes a function as an argument to achieve memoization


// Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c


// Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed

// Create an interface for a function such that whenever a function is triggered the system should log the time. Do not modify the function code


// Create an interface exposing subscribe and publish functionality, which allows publishing data which in turn invokes all the subscribers with the data

