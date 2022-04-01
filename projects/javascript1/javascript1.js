
initialization();

function initialization() {
    const checkButton = document.getElementById("checkButton");
    checkButton.addEventListener( 'click', checkIn);
}

function checkIn() {
   let inputElement = document.getElementById("inputElement");
   let gameResult = document.getElementById("gameResult");
   let randomNumber = Math.ceil(Math.random()*100);
   console.log(randomNumber);

   let inputNumber =parseInt(inputElement.value);

   if (inputNumber>randomNumber) {
       gameResult.textContent ="too high! try Again.";
       gameResult.style.backgroundColor = "white";
   }
   else if (inputNumber<randomNumber) {
       gameResult.textContent = " too low! try Again.";
       gameResult.style.backgroundColor = "white";
   }
   else {
       gameResult.textContent="congragulation!";
       gameResult.style.backgroundColor = "pink";
   }
}
