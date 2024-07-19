document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const fastForwardBtn = document.getElementById('fastForwardBtn');
    const volumeControl = document.getElementById('volumeControl');

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    rewindBtn.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    fastForwardBtn.addEventListener('click', () => {
        video.currentTime += 10;
    });

    volumeControl.addEventListener('input', () => {
        video.volume = volumeControl.value;
    });
});



// BORRA EL TEXTO Y COLOCA OTRO "Bienvenidos"
const welcomeText = document.getElementById("welcome-text");
const words = ["Bienvenida", "Welcome"]; // Puedes agregar más palabras si deseas

let wordIndex = 0; // Índice de la palabra actual
let letterIndex = 0; // Índice de la letra actual
let direction = 1; // Dirección del efecto (1 para escribir, -1 para borrar)

function typeEffect() {
  const currentWord = words[wordIndex];
  const textToDisplay = currentWord.slice(0, letterIndex + 1);
  welcomeText.textContent = textToDisplay;

  if (direction === 1) {
    letterIndex++;
    if (letterIndex === currentWord.length) {
      direction = -1;
      setTimeout(typeEffect, 1500); // Tiempo de espera antes de borrar
    } else {
      setTimeout(typeEffect, 200); // Velocidad de escritura
    }
  } else {
    setTimeout(function () {
      welcomeText.textContent = currentWord.slice(0, letterIndex);
      letterIndex--;
      if (letterIndex === -1) {
        direction = 1;
        wordIndex = (wordIndex + 1) % words.length; // Cambia a la siguiente palabra
      }
      setTimeout(typeEffect, 100); // Velocidad de borrado
    }, 500); // Tiempo de espera antes de empezar a borrar
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeEffect, 200); // Comienza el efecto después de 200ms
});