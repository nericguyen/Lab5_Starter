// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /**
   * When you select a horn from the drop down menu:
   * The correct image should display.
   * The correct audio sound file should be set
   */
  let hornEvent = document.getElementById("horn-select");
  let hornPic = document.getElementById("expose").querySelector("img");
  let hornAudio = document.getElementById("expose").querySelector("audio");

  hornEvent.addEventListener("change", (event) => {
    hornPic.src = `assets/images/${event.target.value}.svg`;
    hornAudio.src = `assets/audio/${event.target.value}.mp3`;
  });

  /**
   * When you change the volume on the slider, the following should occur:
   * At zero volume, the mute icon (level 0) should be displayed
   * From 1 to < 33 volume the volume level one svg should be displayed
   * From 33 to < 67 volume the volume level two svg should be displayed
   * From 67 and up the volume level three svg should be displayed
   * The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
   * Hint: the volume slider's range is from 0 - 100, but the audio element has a
   */
  let volumeSlider = document.getElementById("volume");
  let volumePic = document.getElementById("volume-controls").querySelector("img");
  
  volumeSlider.addEventListener("input", changeVolume);
  function changeVolume() {
    hornAudio.volume = volumeSlider.value / 100;

    if (volumeSlider.value >= 67) {
      volumePic.src = `assets/icons/volume-level-3.svg`;
    } else if (volumeSlider.value >= 33) {
      volumePic.src = `assets/icons/volume-level-2.svg`;
    } else if (volumeSlider.value >= 1) {
      volumePic.src = `assets/icons/volume-level-1.svg`;
    } else {
      volumePic.src = `assets/icons/volume-level-0.svg`;
    }
  }

  /**
   * When you click the “Play Sound” button the following should occur:
   * The corresponding sound for the horn selected should play out loud at the specified volume
   * If the Party Horn is selected, confetti should shoot out when the play button is clicked, 
   *   as shown in the video
   */
  let hornButton = document.querySelector("button");
  const jsConfetti = new JSConfetti()

  hornButton.addEventListener("click", () => {
    hornAudio.play();
    if (hornPic.getAttribute('src') == "assets/images/party-horn.svg") {
      jsConfetti.addConfetti({
        confettiRadius: 10,
        confettiNumber: 500,
      })
    }
  });

}