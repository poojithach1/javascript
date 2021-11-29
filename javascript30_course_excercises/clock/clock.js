
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
  const now = new Date();


   const seconds = now.getSeconds();
   const secondsDegrees=((seconds / 60) * 360);

   secondHand.style.transform =`rotate (${secondsDegrees}deg)`;
   // console.log(secondsDegrees);
   // console.log(seconds);

   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) +((seconds * 6 / 60) / 60);
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
   // console.log(minsDegrees);

   const hour = now.getMinutes();
   const hourDegrees = ((hour / 12) * 360) +((mins * 30 / 60 ) / 12) ;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   // console.log(hourDegrees);

}
setInterval(setDate,1000) ;

setDate();
