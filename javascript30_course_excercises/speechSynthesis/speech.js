const msg = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropdown = document.querySelector('[name = "voice"]');
const stopButton = document.querySelector('#stop');
const speakButton = document.querySelector('#speak');
const options = document.querySelectorAll('[type="range"],[name="text"]');
msg.text = document.querySelector('[name = "text"]').value;

function populatedList() {
   voices = this.getVoices();
   const voicesOption = voices
    //  .filter(voice => voice.lang.includes('en'))
     .map(voice =>`<option value = "${voice.name}">  ${voice.name} (${voice.lang})</option>`)
     .join('');
    voiceDropdown.innerHTML = voicesOption; 
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}
 
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
    speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.value, this.name);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged',populatedList);
voiceDropdown.addEventListener('change',setVoice);
options.forEach(option => option.addEventListener('change',setOption));
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click', () => toggle(false));