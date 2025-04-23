const element = document.querySelector('.typing-text');
const phrases = ["Hola mundo 👋", "Bienvenid@s ❤️",  "¡Vamos allá! 🚀"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
  const fullPhrase = Array.from(phrases[i]); // 👈 evita cortar emojis

  if (!isDeleting && j < fullPhrase.length) {
    currentPhrase.push(fullPhrase[j]);
    j++;
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  element.innerHTML = currentPhrase.join('');

  if (j === fullPhrase.length && !isDeleting) {
    isDeleting = true;
    setTimeout(loop, 1500); // pausa cuando termina de escribir
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

loop();
