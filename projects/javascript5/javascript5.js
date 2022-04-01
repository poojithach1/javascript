initialization();
function initialization(){
    let spring= document.getElementById("button1");
    spring.addEventListener('click', springImg);
    let summer= document.getElementById("button2");
    summer.addEventListener('click', summerImg);
    let autumn =document.getAnimations("button3");
    autumn.addEventListener('click', autumnImg);
    let winter=document.getElementById("button4");
    winter.addEventListener('click', winterImg)
}
let springImage="https://theharekrishnamovement.files.wordpress.com/2012/03/spring.jpg";
let summerImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdCeGT0grRhq_5XyOJAAxLS8hiH1i3uzlwLKU3ernVsRPI36PtK-vu3mILL6tbpHC5x8&usqp=CAU";
let autumnImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw44BmD0HrquVpe2HyhFOEd7_F9XHy4palQ&usqp=CAU";
let winterImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdG52kGR72mehs-1SjH-HgGjxbqpRdDSh5Q&usqp=CAU";


let spring=document.getElementById("images");
let summer=document.getElementById("images");
let autumn=document.getElementById("images");
let winter=document.getElementById("images");


function springImg(event) {
summer.style.backgroundImage="https://theharekrishnamovement.files.wordpress.com/2012/03/spring.jpg"

}
function summerImg(event) {
    summer.style.backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdCeGT0grRhq_5XyOJAAxLS8hiH1i3uzlwLKU3ernVsRPI36PtK-vu3mILL6tbpHC5x8&usqp=CAU";
}
function autumnImg(event) {
    autumn.style.backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw44BmD0HrquVpe2HyhFOEd7_F9XHy4palQ&usqp=CAU";
}
function  winterImg(event) {
    winter.style.backgroundImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdG52kGR72mehs-1SjH-HgGjxbqpRdDSh5Q&usqp=CAU";

  
}