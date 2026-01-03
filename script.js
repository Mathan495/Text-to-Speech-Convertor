const but = document.querySelector('.btn')
const inputab = document.querySelector('.inp-box');
const select = document.getElementById('sel-voice');

let voices = []; 

function populatevoice(){
    voices = speechSynthesis.getVoices();
    select.innerHTML = ''

    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        select.appendChild(option); 
    })
}

but.addEventListener("click", () => {

    const text = inputab.value;
    const errormsg = document.querySelector('.err-msg') 
    
    if (!text){ 
        errormsg.textContent = "Enter a valid text!..."; 
        return; 
    }
    else{
        errormsg.textContent = '';
        const utterence = new SpeechSynthesisUtterance(text);
        const selectedvoice = voices.find((voice) => voice.name === select.value);

        if(selectedvoice){
            utterence.voice = selectedvoice;
        }
        console.log(selectedvoice);
        speechSynthesis.speak(utterence); 
    } 
    
}) 
speechSynthesis.onvoiceschanged = () => {
    populatevoice(); 
}
populatevoice();
