
initialization();

function initialization() {
   const decreaseButton = document.getElementById("decrease-button");
   decreaseButton.addEventListener('click', onDecrease);
   const increaseButton = document.getElementById("increase-button");
   increaseButton.addEventListener('click', onIncrease);
   const resetButton = document.getElementById("reset-button");
   resetButton.addEventListener('click', onReset);
}


function onDecrease(event) {
   const counterElement = document.getElementById("counterValue");
   let previousCounterValue = counterElement.textContent;
   let updatedCounterValue = parseInt(previousCounterValue) - 1;
   if (updatedCounterValue<0) {
      counterElement.style.color="red";
   }
   else if(updatedCounterValue>0) {
      counterElement.style.color="green";
   }
   else {
      counterElement.style.color="black";
   }
   counterElement.textContent = updatedCounterValue;
}

function onReset(event) {
   const counterElement = document.getElementById("counterValue");
   const updatedCounterValue = 0;
   counterElement.textContent = updatedCounterValue;
   counterElement.style.color="black";
}

function onIncrease(event) {
   const counterElement = document.getElementById("counterValue");
   let previousCounterValue = counterElement.textContent;
   let updatedCounterValue = parseInt(previousCounterValue) + 1;
   if (updatedCounterValue<0) {
      counterElement.style.color="red";
   }
   else if(updatedCounterValue>0) {
      counterElement.style.color="green";
   }
   else {
      counterElement.style.color="black";
   }
   counterElement.textContent = updatedCounterValue;
}