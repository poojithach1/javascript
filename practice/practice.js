function isObjectEmpty(obj) {
//   for(let key in obj ){
//       return false;
//   }
//   return true;
 
 let arr = Object.keys(obj);
  if(arr.length==0){
      return true;
  } else{
      return false;
  }
}
// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ prop1:"value" }));//



/**
 * // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
 */

function multiplyNumericInObject(obj) {
  let newObj = {}
    for(let key in obj) {
      if(typeof(obj[key])=="number") {
         newObj[key]  = obj[key]*obj[key];
      }else{
        newObj[key]=obj[key];
       }
    }
    return newObj ;
}
// console.log(multiplyNumericInObject({ tomatoes: 2, grapes: 4 })) // { tomatoes: 4, grapes: 16 }
// console.log(multiplyNumericInObject({ name:"pooja", x:10, y:15}))
// console.log(multiplyNumericInObject({}))

function createClone(obj) {
   let clone ={};
   for( let key in obj){
      
        
         if   (typeof(obj[key]) === "object") {
           clone[key] = createClone(obj[key]);
        }
        else {
             clone[key] = obj[key]
        }
    }  
    return clone;
}


// function testcases(){
//   const original = { 
//       shape:'box',
//       dim: { height: 44, width: 55},
//       cooridnates: { x: 33, y: 77},
//   }
//   const clone = createClone(original) ;
//   console.log(clone.shape === original.shape); // true
//   console.log(clone === original); // false
//   console.log(clone.dim === original.dim); //false
//   console.log(clone.cooridnates === original.cooridnates); //false
// }

// testcases();

// function calculateFactorial(number){
//  if (number === 0 || number === 1)  {
//      return 1;
//  } else {
//      return number * calculateFactorial(number-1);
//  }
 
// }


// function testCase() {
  
//     console.log(calculateFactorial(3));
  
// }

// testCase();



function printNumberInObject(obj) {
    for ( let prop in obj){
      if(typeof(obj[prop])==="number") {
          console.log(prop + ":" + obj[prop])
      }
    }
       

}


function testPrintNumberInObject(){
    const obj ={
       propt: 12,
       prop2: 14,
       prop3:"hi",
       prop4: 88,
       prop5: true
    }
 printNumberInObject(obj);//propt:12,prop2:14,prop4:88
}
testPrintNumberInObject();