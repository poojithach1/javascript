const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
 
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.transform = `rotate(${data.coords.heading}deg)`;
},(err) =>{
console.err('err');
alert('hey! you got allow')
});