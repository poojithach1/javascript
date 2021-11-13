window.addEventListener('keydown',function(e) {
    const audio=document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    const key=document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
   if(!audio) return;
   audio.currentTime = 0;
   audio.play();
   //key.addClass('playing')
   key.classList.add('playing');
   setTimeout(() => {
    key.classList.remove("playing");
   }, 1000)
})