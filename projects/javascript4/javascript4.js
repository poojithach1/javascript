initialization();
 function initialization() {
     const bstop= document.getElementById("stop");
     bstop.addEventListener('click',button1);
     const bready= document.getElementById("ready");
     bready.addEventListener('click',button2);
     const bgo= document.getElementById("go");
     bgo.addEventListener('click',button3)
 }
 let bulbR=document.getElementById("redcolor");
 let buttonR=document.getElementById("stop");
 let bulbY=document.getElementById("yellowcolor");
 let buttonY=document.getElementById("ready");
 let bulbG= document.getElementById("greencolor");
 let buttonG=document.getElementById("go");
  
 function button1(event) {
     bulbR.style.backgroundColor="red";
    buttonR.style.backgroundColor="red";
    bulbY.style.backgroundColor=" #463d6e";
    buttonY.style.backgroundColor="rgb(13, 10, 43)";
     bulbG.style.backgroundColor=" #463d6e";
    buttonG.style.backgroundColor="rgb(13, 10, 43)";

 }

 function button2(event) {
    bulbY.style.backgroundColor="yellow";
    buttonY.style.backgroundColor="yellow";
    bulbR.style.backgroundColor=" #463d6e";
    buttonR.style.backgroundColor="rgb(13, 10, 43)";
    bulbG.style.backgroundColor=" #463d6e";
    buttonG.style.backgroundColor="rgb(13, 10, 43)";
}

function button3(event) {
    bulbG.style.backgroundColor="green";
    buttonG.style.backgroundColor="green";
    bulbY.style.backgroundColor=" #463d6e";
    buttonY.style.backgroundColor="rgb(13, 10, 43)";
    bulbR.style.backgroundColor=" #463d6e";
    buttonR.style.backgroundColor="rgb(13, 10, 43)";
    
}