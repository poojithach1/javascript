initialization();

function initialization() {
  const bt1= document.getElementById("button1");
  bt1.addEventListener('click',button1);
  const bt2= document.getElementById("button2");
  bt2.addEventListener('click',button2);
  const bt3= document.getElementById("button3");
  bt3.addEventListener('click',button3);
  const bt4= document.getElementById("button4");
  bt4.addEventListener('click',button4)
}
let ColorBackground= document.getElementById("color-picker");
let Color=document.getElementById("selected-color");


function button1() {
    ColorBackground.style.background="#e0e0e0";
    Color.textContent="#e0e0e0";
 }
 function button2() {
    ColorBackground.style.background="#6fcf97";
    Color.textContent="#6fcf97";
 }
 function button3() {
    ColorBackground.style.background="#56ccf2";
    Color.textContent="#56ccf2";
 }
 function button4() {
    ColorBackground.style.background="#bb6bd9";
    Color.textContent="#bb6bd9";
 }
