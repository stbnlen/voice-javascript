const texto = document.querySelector(".texto");
const btnLeerTexto = document.querySelector(".btn-leer");

btnLeerTexto.addEventListener("click", () => {
  const locutor = new SpeechSynthesisUtterance();
  const voz = window.speechSynthesis;
  // console.log(texto.value);
  locutor.text = texto.value;
  if (locutor.text.includes('seba')) {
    locutor.text = 'Ese culiao es puro weon'
  }
  voz.speak(locutor);
});
