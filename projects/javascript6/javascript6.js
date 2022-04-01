initialization();
function initialization() {
  let  calculate=document.getElementById("CalculateButton") ;
    calculate.addEventListener('click',calculatedNumber)
}
let a = document.getElementById("billAmount");
let b = document.getElementById("percentagTip");
let c = document.getElementById("tipAmount");
let d = document.getElementById("total");
let error = document.getElementById("errorMessage");
console.log(error);
let e =  "Please enter valid number";


function calculatedNumber() {
    if ( a.value === "") {
        error.textContent=e;
        console.log(error.textContent);
    } else if (b.value === "") {
        error.textContent = e;
        console.log(error.textContent);
    } else {
        error.textContent = "";
        let bill = parseInt(a.value);
        let parcentage = parseInt(b.value);

        let calculatedTip = (parcentage /100) * bill;
        let calculatedTotal = bill + calculatedTip;
        
        c.value = calculatedTip;
        console.log(c.value);
        console.log(calculatedTotal);
        d.value = calculatedTotal

     }
}