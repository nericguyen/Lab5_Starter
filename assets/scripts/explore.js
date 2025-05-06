// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /**
   * On page load, all of the available voices that you can use for your SpeechSynthesizer 
   * should be loaded and populate the “Select Voice” dropdown. 
   * (These are browser specific, so you might get different ones browser to browser).
   */
  let voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  /**
   * When you click the “Press to Talk” button, the following should happen:
   * The text that you have typed into the “Text to speak here” text area should be spoken out loud 
   * using the voice that you have selected
   */
  let speakButton = document.querySelector("button");
  let speakImg = document.getElementById("explore").querySelector("img");
  
  //Updates the text to speak as it is typed
  let speakText = document.getElementById("text-to-speak");
  speakText.addEventListener("input", (event) => {
    speakText.textContent = event.target.value;
  });

  speakButton.addEventListener("click", speakFunc);
  function speakFunc() {
    //Create utterance and selects voice
    let selectedOption = voiceSelect.options[voiceSelect.selectedIndex].value;
    let wordsToSpeak = new SpeechSynthesisUtterance(speakText.textContent);
    for (let i = 0; i < voices.length; i++) {
      if (`${voices[i].name} (${voices[i].lang})` === selectedOption) {
        wordsToSpeak.voice = voices[i];
        break;
      }
    }

    //Speaking + Animations
    speakImg.src = `assets/images/smiling-open.png`;
    speechSynthesis.speak(wordsToSpeak);
    wordsToSpeak.addEventListener("end", () => {
      speakImg.src = `assets/images/smiling.png`;
    });
  }

  
}